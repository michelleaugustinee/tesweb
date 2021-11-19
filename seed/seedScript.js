// const Product = require("../models/product");
// const mongoose = require("mongoose");

// // Menghubungkan ke database platform yang ada di cloud yaitu mongodb atlas
// mongoose.connect(
//   "mongodb+srv://Kelompok_6:kelompok6aquamarine@cluster0.hjgrw.mongodb.net/Aquamarine?retryWrites=true&w=majority",
//   (err, res) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log("Database terhubung untuk seeding");
//     }
//   }
// );

// // require('./products');

// // Isi dari masing-masing produk
// const products = [
//   new Product({
//     imagePath: "https://i.ibb.co/hm6g7TB/salmon.jpg",
//     link: "/salmon",
//     name: "Salmon",
//     price: 285000,
//     status: 1,
//   }),
//   new Product({
//     imagePath: "https://i.ibb.co/zV3T2wP/shrimp1.jpg",
//     link: "/shrimp",
//     name: "Shrimp",
//     price: 139000,
//     status: 1,
//   }),
//   new Product({
//     imagePath: "https://i.ibb.co/L1SdPqS/crab1.jpg",
//     link: "/crab",
//     name: "Crab",
//     price: 148000,
//     status: 0,
//   }),
//   new Product({
//     imagePath: "https://i.ibb.co/Gd5FSy9/octopus2.jpg",
//     link: "/octopus",
//     name: "Octopus",
//     price: 120000,
//     status: 0,
//   }),
//   new Product({
//     imagePath: "https://i.ibb.co/vD8w3bH/gallery1.jpg",
//     link: "/scallop",
//     name: "Scallop",
//     price: 150000,
//     status: 0,
//   }),
//   new Product({
//     imagePath: "https://i.ibb.co/gWwrjWk/redsnapper1.jpg",
//     link: "/redsnapper",
//     name: "Red Snapper",
//     price: 118000,
//     status: 1,
//   }),
//   new Product({
//     imagePath: "https://i.ibb.co/hyZxVSH/cumi2.jpg",
//     link: "/squid",
//     name: "Squid",
//     price: 99000,
//     status: 0,
//   }),
//   new Product({
//     imagePath: "https://i.ibb.co/h1RTct5/lobster1.jpg",
//     link: "/lobster",
//     name: "Lobster",
//     price: 175000,
//     status: 1,
//   }),
// ];

// // Memasukkan isi dari produk yang ada ke dalam database
// var done = 0;
// for (var i = 0; i < products.length; i++) {
//   products[i].save((err, res) => {
//     done++;
//     if (done == products.length) {
//       console.log("Produk list berhasil di upload");
//       exit();
//     }
//   });
// }

// // Fungsi exit setelah berhasil
// function exit() {
//   mongoose.disconnect();
// }
