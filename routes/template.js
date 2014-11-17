
/*
 * GET users listing.
 */

exports.select = function(req, res){
  res.render('template-design', { title: 'Select A Template Design - LaserCards' });
};
exports.fill = function(req,res){
  req.session.image = req.body.design // Selected design goes here
  req.session.template = true;
  // Pass in image for selected design
  res.render('template-fill', {title: 'Fill Out Your Information - LaserCards', image: req.session.image})
}