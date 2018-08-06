var mongoose = require('mongoose'),
  	Product = mongoose.model('Inspiration');

exports.get = function(req, res) {
  Inspiration.find({}, function(err, data) {
    if (err) 
      return res.status(400).send({
        success: false, 
        results: null,
        message: err
      });
    return res.send({success: true, results: data});
  });
};

// exports.create = function(req, res) {
//   console.log(req.user);
//   req.body.createBy = req.user.user._id;
//   var newProduct = new Product(req.body);
//   newProduct.save(function(err, product) {
//     if (err)
//      return res.status(400).send({
//         success: false, 
//         results: null,
//         message: err
//       });
//     return res.send({success: true, results: product});
//   });
// };

// exports.update = function(req, res) {
//   console.log(req.body)
//   Product.findOneAndUpdate({_id : req.params.product.Id}, req.body, {new: true}, function (err, data) {
//     if (err) 
//       return res.status(400).send({
//         success: false, 
//         results: null,
//         message: err
//       });
//     return res.send({success: true, results: data});
//   });
// };

// exports.delete = function(req, res) {
//   Product.findByIdAndRemove({_id : req.params.productId}, function (err, data) {
//     if (err) 
//       return res.status(400).send({
//         success: false, 
//         results: null,
//         message: err
//       });
//     return res.send({success: true, results: data});
//   });
// };

// //Product Detail
// exports.getDetail = function(req, res) {
//   Product.findOne({ _id : req.params.productId }, function(err, data) {
//     if (err) 
//       return res.status(400).send({
//         success: false, 
//         results: null,
//         message: err
//       });
//     return res.send({success: true, results: data});
//   });
// };

// // updateFavourite
// exports.updateFavourite = function(req, res) {
//   Product.findOneAndUpdate({_id : req.params.productId}, req.body, function (err, data) {
//     if (err) 
//       return res.status(400).send({
//         success: false, 
//         results: null,
//         message: err
//       });
//     return res.send({success: true, results: data});
//   });
// };
