import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import { body, validationResult } from 'express-validator';
import Message from '../models/Message.js';

dotenv.config();

const router = express.Router();

// Rate limiter (increased max for testing)
const messageLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Increased for testing
  message: 'Too many requests from this IP, please try again after 15 minutes.',
});

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

// Input validation
const validateMessage = [
  body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 100 }),
  body('email').isEmail().withMessage('Invalid email address'),
  body('message').trim().notEmpty().withMessage('Message is required').isLength({ max: 1000 }),
];

router.post('/', messageLimiter, validateMessage, async (req, res) => {
  console.log('Received POST /api/messages:', req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('Validation errors:', errors.array());
    return res.status(400).json({ message: errors.array()[0].msg });
  }

  const { name, email, message } = req.body;

  try {
    // Save to MongoDB
    console.log('Saving message to MongoDB');
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    console.log('Message saved successfully');

    // Send email
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    console.log('Sending email...');
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error in /api/messages:', error);
    res.status(500).json({ message: `Failed to send message: ${error.message}` });
  }
});

export default router;
