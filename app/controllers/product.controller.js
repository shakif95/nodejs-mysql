const Product = require('../models/Product.model.js');

// Create and Save a new Customer
exports.create = (req, res) => {
  if(!req.body){
    res.status(400).send({
      message: 'invalid request body'
    });
  }

  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    status: req.body.status,
    sold: req.body.sold
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