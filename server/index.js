import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import messageRoutes from './routes/message.js';

dotenv.config();

const app = express();

// Allowed frontend origins (no trailing slash)
const allowedOrigins = [
  process.env.FRONTEND_URL || 'http://localhost:5173',
];

// CORS configuration
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.some(allowed => origin.startsWith(allowed))) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST'],
    credentials: true,
  })
);

// Handle CORS errors
app.use((err, req, res, next) => {
  if (err.message === 'Not allowed by CORS') {
    return res.status(403).json({ error: 'CORS error: origin not allowed' });
  }
  next(err);
});

// Parse JSON body
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  dbName: 'portfolio',
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch(() => {});

// API route
app.use('/api/messages', messageRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Root response
app.get('/', (req, res) => {
  res.send('Portfolio backend is running.');
});

// Favicon handler to avoid warnings
app.get('/favicon.ico', (req, res) => res.status(204).end());

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT);
