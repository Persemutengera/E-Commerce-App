import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';

import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get('/', (req, res) => {
  res.send('API Working');
});

// Connect services
await connectDB();
connectCloudinary();

// Local development only
if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 4000;

  app.listen(port, () => {
    console.log(`Server started on PORT ${port}`);
  });
}

// Required for Vercel
export default app;