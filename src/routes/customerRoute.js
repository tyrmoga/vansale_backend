import { Router } from "express";
import { getCustomers, getCustomerById, createCustomer, updateCustomer, deleteCustomer } from '../controllers/customerController.js';

const customersRouter = Router();

// list odoo customers
customersRouter.get('/customers', getCustomers);

//get single customer by id
customersRouter.get('/customers/:id', getCustomerById);

// create new customer
customersRouter.post('/customers', createCustomer);

// update customer by id
customersRouter.patch('/customers/:id', updateCustomer);

// delete customer by id
customersRouter.delete('/customers/:id', deleteCustomer);


export default customersRouter;