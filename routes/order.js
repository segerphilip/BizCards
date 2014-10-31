exports.confirm = function(req, res){
  req.session.material = req.body.material;
  console.log(req.session);
  res.render('order-confirm', {title: 'Confirm Your Order', material: req.session.material, name: req.session.imageOwner, image: req.session.imagePath, email: req.session.ownerEmail});
};