const express = require('express');
const { getProducts, createProduct, sendId } = require('../controllers/products.controller');
const { auth } = require('../middlewares/auth.middleware');

const productRouter = express.Router();

productRouter.get("/products", getProducts);
productRouter.get("/secondproducts", getProducts);
productRouter.get("/seachproducts",getProducts);
productRouter.post("/create-product", createProduct);

// productRouter.post("/insertData",sendData);
// productRouter.get("/singeledata",sendId);

module.exports = {
    productRouter
}