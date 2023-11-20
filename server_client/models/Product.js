const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  // R$/Kg
  priceKg: {
    type: Number,
    require: [true, 'Please provide a price'],
    min: 0
  },

  category: {
    type: String,
    require: [true, 'Please provide a category'],
    min: 6,
    max: 255
  },

  quantity: {
    type: Number,
    require: [true, 'Please provide a quantity'],
    min: 0
  },

  idProduct: {
    type: Number,
    require: [true, 'Please provide an id'],
    min: 0
  }
})

module.exports = mongoose.model('Product', ProductSchema)
