import { Router } from "express";
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js';

const productsRouter = Router();

// list odoo products
productsRouter.get('/products', getProducts);

//get single product by id
productsRouter.get('/products/:id', getProductById);

// create new product
productsRouter.post('/products', createProduct);

// update product by id
productsRouter.patch('/products/:id', updateProduct);

// delete product by id
productsRouter.delete('/products/:id', deleteProduct);


export default productsRouter;