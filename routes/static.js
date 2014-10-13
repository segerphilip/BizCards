
/*
 * GET users listing.
 */

exports.about = function(req, res){
  res.render('about', { title: 'About the LaserCards Team' });
};

exports.help = function(req, res){
  res.send("respond with a resource");
};