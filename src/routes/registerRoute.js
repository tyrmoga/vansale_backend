import { Router } from "express";

const registerRouter = Router();

// register route
registerRouter.post('/register', (req, res) => {
  const { username, password } = req.body;
  res.status(200).json({ message: `Register attempt for username: ${username}` });
});

export default registerRouter;