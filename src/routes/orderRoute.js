import { Router } from "express";

const ordersRouter = Router();

// list odoo orders
ordersRouter.get('/orders', (req, res) => {
  res.status(200).json({ message: 'List of orders' });
});

//get single order by id
ordersRouter.get('/orders/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Order details for ID: ${id}` });
});

// create new order
ordersRouter.post('/orders', (req, res) => {
  const { name, email } = req.body;
  res.status(201).json({ message: `Order created with name: ${name} and email: ${email}` });
});

// update order by id
ordersRouter.patch('/orders/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  res.status(200).json({ message: `Order with ID: ${id} updated with name: ${name} and email: ${email}` });
});

// delete order by id
ordersRouter.delete('/orders/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Order with ID: ${id} deleted` });
});


export default ordersRouter;