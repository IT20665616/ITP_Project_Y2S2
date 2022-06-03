const mongoose = require('mongoose');

const wishlistSchema = mongoose.Schema({
    productName: {
        type: String
    },
    price:{
        type: Number
    },
    userId:{
      type: String
  }

},{ timesamps: true})

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = {Wishlist}