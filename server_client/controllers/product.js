const Product = require('../models/Product')

class productController {
  static getProducts = async (req, res) => {
    // @desc    Get all products
    // @route   GET /api/v1/products
    // @access  Public

    try {
      const products = await Product.find()

      const productsQuantity = products.map(product => product.quantity)

      res.status(200).json({ productsQuantity })
    } catch (error) {
      res.status(500).json({ success: false, error: error.message })
    }
  }

  static getProduct = async (req, res) => {
    // @desc    Get a product
    // @route   GET /api/v1/products/:idProduct
    // @access  Public

    try {
      const product = await Product.findById(req.params.idProduct)

      if (!product) {
        return res
          .status(404)
          .json({ success: false, error: 'Product not found' })
      }

      res.status(200).json({ product })
    } catch (error) {
      res.status(500).json({ success: false, error: error.message })
    }
  }

  static createProduct = async (req, res) => {
    // @desc    Create a product
    // @route   POST /api/v1/products
    // @access  Private

    try {
      const product = await Product.create(req.body)

      res.status(201).json({ success: true, data: product })
    } catch (error) {
      res.status(500).json({ success: false, error: error.message })
    }
  }

  static updateProduct = async (req, res) => {
    // @desc    Update a product
    // @route   PUT /api/v1/products/:idProduct
    // @access  Private

    try {
      const product = await Product.findByIdAndUpdate(
        req.params.idProduct,
        req.body,
        {
          new: true,
          runValidators: true
        }
      )

      if (!product) {
        return res
          .status(404)
          .json({ success: false, error: 'Product not found' })
      }

      res.status(200).json({ success: true, data: product })
    } catch (error) {
      res.status(500).json({ success: false, error: error.message })
    }
  }

  static deleteProduct = async (req, res) => {
    // @desc    Delete a product
    // @route   DELETE /api/v1/products/:idProduct
    // @access  Private

    try {
      const product = await Product.findOneAndDelete(req.params.idProduct)

      if (!product) {
        return res
          .status(404)
          .json({ success: false, error: 'Product not found' })
      }

      res.status(200).json({ success: true, data: {} })
    } catch (error) {
      res.status(500).json({ success: false, error: error.message })
    }
  }

  static updateQuantity = async (req, res) => {
    // @desc    Create a product
    // @route   POST /api/v1/products/update-quantity
    // @access  Private

    try {
      const { quantity1: plastico, quantity2: aluminio } = req.body

      const productToUpdatePlastico = await Product.findOne({ idProduct: 1 })
      if (productToUpdatePlastico) {
        productToUpdatePlastico.quantity += plastico
        await productToUpdatePlastico.save()
      }

      const productToUpdateAluminio = await Product.findOne({ idProduct: 2 })
      if (productToUpdateAluminio) {
        productToUpdateAluminio.quantity += aluminio
        await productToUpdateAluminio.save()
      }

      console.log(
        productToUpdatePlastico.quantity,
        productToUpdateAluminio.quantity,
        plastico,
        aluminio
      )

      res.status(201).json({
        success: true,
        data: { quantity1: plastico, quantity2: aluminio }
      })
      return
    } catch (error) {
      res.status(500).json({ success: false, error: error.message })
    }
  }

  static decreaseQuantity = async (req, res) => {
    // @desc    Decrease product quantities
    // @route   POST /api/v1/products/decrease-quantity
    // @access  Private

    try {
      const { quantity1: decreasePlastico, quantity2: decreaseAluminio } =
        req.body

      const productToDecreasePlastico = await Product.findOne({ idProduct: 1 })
      if (productToDecreasePlastico) {
        productToDecreasePlastico.quantity = decreasePlastico
        await productToDecreasePlastico.save()
      }

      const productToDecreaseAluminio = await Product.findOne({ idProduct: 2 })
      if (productToDecreaseAluminio) {
        productToDecreaseAluminio.quantity = decreaseAluminio
        await productToDecreaseAluminio.save()
      }

      console.log(
        productToDecreasePlastico.quantity,
        productToDecreaseAluminio.quantity,
        decreasePlastico,
        decreaseAluminio
      )

      res.status(201).json({
        success: true,
        data: { quantity1: decreasePlastico, quantity2: decreaseAluminio }
      })
      return
    } catch (error) {
      res.status(500).json({ success: false, error: error.message })
    }
  }
}

module.exports = productController
