const router = require('express').Router();

const product_controller = require('./product.controller')

router.get('/getAllProducts',product_controller.getAllProducts);
router.post('/addproduct', product_controller.addProduct);
router.delete('/deleteproduct',product_controller.deleteProduct);
router.put('/updateproduct', product_controller.updateProduct);
router.get('/searchproduct',product_controller.searchProduct);







module.exports =router 