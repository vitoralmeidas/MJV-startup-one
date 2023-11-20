// route for product
const express = require('express')
const router = express.Router()
const productController = require('../controllers/product')

router
  .route('/products')
  .get(productController.getProducts)
  .post(productController.createProduct)

router
  .route('/products/:id')
  .get(productController.getProduct)
  .put(productController.updateProduct)
  .delete(productController.deleteProduct)

router.route('/products/update-quantity').post(productController.updateQuantity)
router
  .route('/products/decrease-quantity')
  .post(productController.decreaseQuantity)
module.exports = router
