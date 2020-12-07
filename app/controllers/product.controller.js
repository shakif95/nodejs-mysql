const Product = require('../models/Product.model.js');

// Create and Save a new Product
exports.create = (req, res) => {
  if(!req.body){
    res.status(400).send({
      message: 'invalid request body'
    });
  }

  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    category_id: req.body.category_id,
    status_id: req.body.status_id,
    price: req.body.price
  });

  Product.create(product, (err, data) => {
    if(err){
      res.status(500).send({
        message: err.message || 'Server error'
      });
    }
    else res.send(data);
  });

};

// Search a Specific Product in the database
exports.searchAll = (req, res) => {
  if(!req.body){
    res.status(400).send({
      message: 'invalid request body'
    });
  }

  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    category_id: req.body.category_id,
    status_id: req.body.status_id,
    price: req.body.price
  });

  Product.search(product, (err, data) => {
    if(err){
      res.status(500).send({
        message: err.message || 'Server error'
      });
    }
    else res.send(data);
  });

};

// Retrieve all products from the database.
exports.findAll = (req, res) => {
  Product.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
    else res.send(data);
  });
};