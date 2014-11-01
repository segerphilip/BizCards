var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'localhost');

var orderSchema = mongoose.Schema({
  cardImage: String,
  name: String,
  email: String,
  helpNeeded: String,
  material: String
});

var Order = mongoose.model('Order', orderSchema);
module.exports = Order;