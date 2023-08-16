// routes/productsRoutes.js
const express = require('express');
const router = express.Router();
const ProductsController = require('../controllers/productsController');

// GET product list
router.get('/', async (req, res) => {
    const db = req.db;
    const controller = new ProductsController(db);

    await controller.getProductList(req, res);
});

module.exports = router;
