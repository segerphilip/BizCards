var Order = require('../public/schemas/order');

exports.confirm = function(req, res){
  req.session.material = req.body.material;
  console.log(req.session);
  var newOrder = new Order({cardImage:req.session.image,name:req.session.name,email:req.session.email,material:req.session.material,template:req.session.template,templateInfo:req.session.templateInfo});
  newOrder.save(function(err){
    if(err){
      console.log('Problem saving new order.');
      console.log(err);
    }
    else{
      console.log('Order saved successfully.')
    }
  })
  var buttonmap = {"Walnut": "GE7FHCVVBACEE", "Cherry": "MEN438Z29J866", "Birch": "4SAPHAYVLUY8S", "Cardstock": "YBKPVF5GSJK6S"};
  var pricemap = {"Walnut": ["8.50", "17.00", "25.50", "34.00"], "Cherry": ["8.50", "17.00", "25.50", "34.00"], "Birch": ["7.00", "14.00", "21.00", "28.00"], "Cardstock": ["2.50", "5.00", "7.50", "10.00"]}
  var buttoncode = buttonmap[req.session.material];
  var baseprice = pricemap[req.session.material];
  res.render('order-confirm', {title: 'Confirm Your Order - LaserCards', material: req.session.material, name: req.session.name, image: req.session.image, email: req.session.email, button: buttoncode, baseprice: baseprice});
};