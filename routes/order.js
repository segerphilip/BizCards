exports.addtocart = function(req, res){
  console.log(req.body.material);
  req.session.material = req.body.material;
  res.redirect('/');
};