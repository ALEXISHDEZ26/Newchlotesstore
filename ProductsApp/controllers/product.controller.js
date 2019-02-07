const Product = require('../models/product.model');
 

exports.product_create = function (req, res, next) {             //funcion para crear un objeto desde DB
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price,
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};


exports.product_update = function (req, res,next) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};


exports.product_details = function (req, res, next) {                  //funcion para obtener un valor desde DB
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};



exports.product_delete = function (req, res,next) {                  //FUNCION PARA BORRAR UN ELEMENTO DESDE BASE DE DATOS
    
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.getAll = (req, res, next) => {
    Product.find((err, products) => {
        if (err) return next(err);
        res.send(products);
    })
};
