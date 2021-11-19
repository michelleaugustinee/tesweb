// const express = require("express");
// const router = express.Router();

// const productController = require("../controllers/productController");

// router.get("/", (req, res) => {
//     res.render("product/addOrEdit", {
//         viewTitle: "Insert Product"
//     });
// });

// router.post("/", (req, res) => {
//     if (req.body._id == "") {
//         insertRecord(req, res); 
//     } else {
//         updateRecord(req, res);
//     }
// });

// router.get('/list', (req, res) => {
//     Product.find((err, docs) => {
//         if (!err) {
//             res.render("product/list", {
//                 list: docs
//             });
//         }
//         else {
//             console.log('Error in retrieving product list :' + err);
//         }
//     });
// });

// router.get('/:id', (req, res) => {
//     Product.findById(req.params.id, (err, doc) => {
//         if (!err) {
//             res.render("product/addOrEdit", {
//                 viewTitle: "Update Product",
//                 product: doc
//             });
//         }
//     });
// });

// router.get('/delete/:id', (req, res) => {
//     Product.findByIdAndRemove(req.params.id, (err, doc) => {
//         if (!err) {
//             res.redirect('/product/list');
//         }                                 
//         else { console.log('Error in product delete :' + err); }
//     });
// });

// module.exports = router;