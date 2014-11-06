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
      req.session.image = files.image[0].path;
      // Replaces /, \, |, {, }, +, <, >, [, and ] in the name and email fields.
      // Also limits names and emails to 100 characters (sanity check!)
      // also strips drop() and remove() strings
      req.session.name = fields.name[0].replace(/([\/\\\|\{\}\+\<\>\[\]]|drop\(\)|remove\(\))/ig,'').substring(0,100);
      req.session.email = fields.email[0].replace(/([\/\\\|\{\}\+\<\>\[\]]|drop\(\)|remove\(\))/ig,'').substring(0,100);
      console.log('Upload of', files.image[0].originalFilename, 'for', fields.name[0], 'completed!');
      console.log(req.session.image.slice(20));
      res.render('material-select', { title: 'Select A Material - Lasercards', filepath: req.session.image.slice(20) });
    }
  });
};