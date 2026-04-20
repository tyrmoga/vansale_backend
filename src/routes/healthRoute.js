import { Router } from "express";

const healthRouter = Router();

// health check route
healthRouter.get('/health', (req, res) => {
  res.status(200).json({ message: 'Service is running' });
});

export default healthRouter;