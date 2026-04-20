const createProduct = (req, res) => {
    const { name, price } = req.body;
    res.status(201).json({ message: `Product created with name: ${name} and price: ${price}` });
};

const getProducts = (req, res) => {
    res.status(200).json({ message: 'List of products' });
};

const getProductById = (req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: `Product details for ID: ${id}` });
};

const updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    res.status(200).json({ message: `Product with ID: ${id} updated with name: ${name} and price: ${price}` });
};

const deleteProduct = (req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: `Product with ID: ${id} deleted` });
};

export { createProduct, getProducts, getProductById, updateProduct, deleteProduct };