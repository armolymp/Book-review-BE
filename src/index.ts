import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import bookRoutes from './routes/bookRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/bookreviews', {
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error(`MongoDB connection error: ${err.message}`);
});

app.use('/api/books', (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
}, bookRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
