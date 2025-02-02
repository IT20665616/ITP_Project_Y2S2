const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  productName: {
    type: String
  },

  productCode: {
    type: String
  },

  price: {
    type: Number
  },

  discount: {
    type: String
  },
  quantity: {
    type: Number
  },

  userId: {
    type: String
  },

  image: {
    type: String,
  }

}, { timesamps: true })

const Cart = mongoose.model('Cart', cartSchema);

module.exports = { Cart }