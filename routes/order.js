exports.addtocart = function(req, res){
  console.log(req.body.material);
  res.session.material = req.body.material;
  res.redirect('/');
};