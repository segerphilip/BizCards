var multiparty = require('multiparty');

exports.render = function(req, res){
  res.render('upload-design', { title: 'Upload Your Design - LaserCards' });
};

exports.save = function(req, res){
  // create a form to begin parsing
  var form = new multiparty.Form({autoFiles: true, uploadDir: __dirname + '/../uploads'});

  // parse the form
  form.parse(req,function(err,fields,files){
    if(err){
      console.log(err);
      res.redirect('/upload-design');
    }
    else{
      console.log(files);
      console.log('Upload completed!');
      res.redirect('/');
    }
  });
};