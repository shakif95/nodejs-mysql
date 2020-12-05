const sql = require("./db.js");

const Product = function(product) {
  this.id = product.id;
  this.name = product.name;
  this.description = product.description;
  this.category = product.category;
  this.status = product.status;
  this.sold = product.sold;
};

Product.create = (newProduct, result) => {
  sql.query("INSERT INTO products SET ?", newProduct, (err, res) => {
    if(err){
      console.log('error while creating product');
      result(err, null);
      return;
    }

    console.log('product created', {id: res.id, ...newProduct});
    result(null, {id: res.id, ...newProduct});
  });
};

Product.getAll = result => {
  sql.query("SELECT * FROM products", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("products: ", res);
    result(null, res);
  });
};

module.exports = Product;