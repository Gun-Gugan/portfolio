import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import { body, validationResult } from 'express-validator';
import Message from '../models/Message.js';

dotenv.config();

const router = express.Router();

//   Rate limiter: 100 requests per 15 minutes
const messageLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many requests from this IP, please try again later.',
});

//   Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

//   Validate incoming request
const validateMessage = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ max: 100 }).withMessage('Name must be under 100 characters'),
  body('email')
    .isEmail().withMessage('Invalid email address'),
  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ max: 1000 }).withMessage('Message must be under 1000 characters'),
];

//   POST /api/messages
router.post('/', messageLimiter, validateMessage, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Return first validation error
    return res.status(400).json({ success: false, message: errors.array()[0].msg });
  }

  const { name, email, message } = req.body;

  try {
    //   Save message to MongoDB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    //   Send email to admin
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      subject: 'New Contact Form Submission',
      text: `You received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.',
    });
  }
});

export default router;
