import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import messageRoutes from './routes/message.js';

dotenv.config();

const app = express();

const allowedOrigins = [
  process.env.FRONTEND_URL || 'https://portfolio-client-xj4n.onrender.com',
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST'],
    credentials: true,
  })
);

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { dbName: 'portfolio' }).catch(() => {});

//  Serve favicon placeholder
app.get('/favicon.ico', (req, res) => res.status(204).end());

//  API routes
app.use('/api/messages', messageRoutes);

//  Health route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

//  Root route
app.get('/', (req, res) => {
  res.send('Portfolio backend is running.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
