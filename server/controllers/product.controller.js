const { Product } = require('../models/product.model');


module.exports.createProduct = (req, res) => {
    const { title, price, description} = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json({ product: product }))
        .catch(err => res.json({ message: "Something went wrong . . .", error: err }));
    }

module.exports.allProducts = (req, res) => {
    Product.find({})
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json({ message: "Something went wrong . . .", error: err }));
    }

module.exports.oneProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json({ message: "Something went wrong . . .", error: err }))
    }

