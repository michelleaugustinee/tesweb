const express = require("express");
const Product = require("../models/product");
const router = express.Router();

router.get("/addpro", (req, res) => {
  res.render("pages/addpro");
});

router.post("/addpro", async (req, res) => {
  const imagePath = req.body.imagePath;
  const link = req.body.link;
  const name = req.body.name;
  const price = req.body.price;
  const status = req.body.status;

  const addpro = new Product({
    imagePath: imagePath,
    link: link,
    name: name,
    price: price,
    status: status,
  });

  await addpro.save((err, res) => {
    if (err) console.error(err);
    else {
      console.log(err);
    }
  });
  req.flash("message", "Produk berhasil ditambahkan!");
  res.redirect("/dashboard");
});

router.get("/delete/:id", (req, res) => {
  Product.findByIdAndDelete(req.params.id, (err) => {
    if (!err) {
      req.flash("message", "Produk berhasil dihapus!");
      res.redirect("/dashboard");
    } else {
      console.log(err);
    }
  });
});

//show update
router.get("/editpro/:id", (req, res, next) => {
  Product.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, data) => {
      res.render("pages/editpro", { products: data });
    }
  );
});

//update
router.post("/editpro/:id", (req, res, next) => {
  Product.findByIdAndUpdate({ _id: req.params.id }, req.body, (err) => {
    if (err) {
      console.log("Update gagal");
      next(err);
    } else {
      req.flash("message", "Produk berhasil diupdate!");
      res.redirect("/dashboard");
    }
  });
});

module.exports = router;
