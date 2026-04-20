import { Router } from "express";

const productsRouter = Router();

// list odoo products
productsRouter.get('/products', (req, res) => {
  res.status(200).json({ message: 'List of products' });
});

//get single product by id
productsRouter.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Product details for ID: ${id}` });
});

// create new product
productsRouter.post('/products', (req, res) => {
  const { name, price } = req.body;
  res.status(201).json({ message: `Product created with name: ${name} and price: ${price}` });
});

// update product by id
productsRouter.patch('/products/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  res.status(200).json({ message: `Product with ID: ${id} updated with name: ${name} and price: ${price}` });
});

// delete product by id
productsRouter.delete('/products/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Product with ID: ${id} deleted` });
});


export default productsRouter;