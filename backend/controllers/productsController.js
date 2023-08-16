// controllers/productsController.js
const Product = require('../models/Product');

class ProductsController {
    constructor(db) {
        this.productModel = new Product(db);
    }

    async getProductList(req, res) {
        try {
            const productList = await this.productModel.getAllProducts();
            res.json(productList);
        } catch (err) {
            console.error('Error retrieving product list:', err);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = ProductsController;
