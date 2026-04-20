import { Router } from "express";

const loginRouter = Router();

// login route
loginRouter.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.status(200).json({ message: `Login attempt for username: ${username}` });
});

export default loginRouter;