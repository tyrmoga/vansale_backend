import { Router } from "express";

const customersRouter = Router();

// list odoo customers
customersRouter.get('/customers', (req, res) => {
  res.status(200).json({ message: 'List of customers' });
});

//get single customer by id
customersRouter.get('/customers/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Customer details for ID: ${id}` });
});

// create new customer
customersRouter.post('/customers', (req, res) => {
  const { name, email } = req.body;
  res.status(201).json({ message: `Customer created with name: ${name} and email: ${email}` });
});

// update customer by id
customersRouter.patch('/customers/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  res.status(200).json({ message: `Customer with ID: ${id} updated with name: ${name} and email: ${email}` });
});

// delete customer by id
customersRouter.delete('/customers/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Customer with ID: ${id} deleted` });
});


export default customersRouter;