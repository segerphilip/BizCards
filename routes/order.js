var Order = require('../public/schemas/order');

exports.confirm = function(req, res){
  req.session.help = 'yes';
  if(req.body.appearance == 'no'){
    req.session.help = 'no';
  }
  req.session.material = req.body.material;
  console.log(req.session);
  var newOrder = new Order({cardImage:req.session.image,name:req.session.name,email:req.session.email,helpNeeded:req.session.help,material:req.session.material});
  newOrder.save(function(err){
    if(err){
      console.log('Problem saving new order.');
      console.log(err);
    }
    else{
      console.log('Order saved successfully.')
    }
  })
  res.render('order-confirm', {title: 'Confirm Your Order', material: req.session.material, name: req.session.name, image: req.session.image, email: req.session.email, help: req.session.help});
};