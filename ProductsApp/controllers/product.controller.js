const Category = require('../models/category.model');
const Product = require('../models/product.model');







// controllers/products.js
exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price,
            category: req.body.category
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};


exports.getProductsByBrand = (req, res, next) => {
    Product.where('brand').equals(req.params.id).populate('brand').exec((err, products) => {
        if (err) return next(err);
        console.log(err, products)
        res.send(products);
    })
};


exports.getAll = (req, res, next) => {
    Product.where('cat').equals(req.params.id).populate({path:'cat'}).exec((err, products) => {
        if (err) return next(err);
        console.log(err, products)
        res.send(products);
    })
};