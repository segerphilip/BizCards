exports.confirm = function(req, res){
  req.session.material = req.body.material;
  console.log(req.session);
  res.render('order-confirm');
};