var multiparty = require('multiparty');

exports.render = function(req, res){
  res.render('upload-design', { title: 'Upload Your Design - LaserCards' });
};

exports.save = function(req, res){
  // create a form to begin parsing
  var form = new multiparty.Form({autoFiles: true, uploadDir: __dirname + '/../public/uploads'});

  // parse the form
  form.parse(req,function(err,fields,files){
    if(err){
      console.log(err);
      res.redirect('/upload-design');
    }
    else{
      console.log(files.image[0].path);
      req.session.imagePath = files.image[0].path;
      console.log('Upload completed!');
      res.render('material-select', { title: 'Select A Material - Lasercards', filepath: req.session.imagePath.slice(36) });
    }
  });
};