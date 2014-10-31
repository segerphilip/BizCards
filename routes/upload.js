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
      req.session.imagePath = files.image[0].path;
      req.session.imageOwner = fields.name[0];
      req.session.ownerEmail = fields.email[0];
      console.log('Upload of', files.image[0].originalFilename, 'for', fields.name[0], 'completed!');
      res.render('material-select', { title: 'Select A Material - Lasercards', filepath: req.session.imagePath.slice(36) });
    }
  });
};