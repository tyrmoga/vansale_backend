import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import loginRouter from './src/routes/loginRoute.js';
import registerRouter from './src/routes/registerRoute.js';
import healthRouter from './src/routes/healthRoute.js';
import productsRouter from './src/routes/productRoute.js';
import customersRouter from './src/routes/customerRoute.js';
import ordersRouter from './src/routes/orderRoute.js';

dotenv.config();

//1. Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

//2. Middleware
app.use(cors());
app.use(express.json());

// 3. Routes
// 3a. Health Check
app.use('/', healthRouter);
// 3b. Product Routes
app.use('/api', productsRouter);
// 3c. Customer Routes
app.use('/api', customersRouter);
// 3d. Order Routes
app.use('/api', ordersRouter);
// 3e. Login Routes
app.use('/api', loginRouter);
// 3f. Register Routes
app.use('/api', registerRouter);


//4. Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});