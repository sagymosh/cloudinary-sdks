var cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: '', 
    api_key: '', 
    api_secret: '' 
  });

  // Upload asset
/*
  cloudinary.uploader.upload("dakota-corbin-272274_zid5fv.jpg", function(result) { 
    console.log(result) 
  });
  */

 // Create named transformation
 cloudinary.v2.api.create_transformation('small_fill',
    'w_150,h_100,c_fill',
    function(error, result){console.log(result)}); 