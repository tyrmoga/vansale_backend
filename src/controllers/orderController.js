const createOrder = (req, res) => {
    const { name, email } = req.body;
    res.status(201).json({ message: `Order created with name: ${name} and email: ${email}` });
};

const getOrders = (req, res) => {
    res.status(200).json({ message: 'List of orders' });
};

const getOrderById = (req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: `Order details for ID: ${id}` });
};

const updateOrder = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    res.status(200).json({ message: `Order with ID: ${id} updated with name: ${name} and email: ${email}` });
};

const deleteOrder = (req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: `Order with ID: ${id} deleted` });
};

export { createOrder, getOrders, getOrderById, updateOrder, deleteOrder };