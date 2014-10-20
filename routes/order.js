exports.getinfo = function(req, res){
  req.session.material = req.body.material;
  // console.log(req.session.material, req.session.quantity, req.session.imagePath);
  res.redirect('/');
};