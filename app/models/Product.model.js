const sql = require("./db.js");
var _ = require("lodash");

const Product = function(product) {
  this.name = product.name;
  this.description = product.description;
  this.category_id = product.category_id;
  this.status_id = product.status_id;
  this.price = product.price;
};

Product.create = (newProduct, result) => {
  sql.query("INSERT INTO product SET ?", newProduct, (err, res) => {
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
  sql.query("SELECT * FROM product", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("products: ", res);
    result(null, res);
  });
};

Product.search = (newProduct,result) => {
  sql.query(`SELECT * FROM product WHERE product.name LIKE '%${newProduct.name}%'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("products: ", res);

    if (_.empty(res)) {
      sql.query(`SELECT * FROM product`, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
    
        console.log("products: ", res);
        result(null, res);
      });
    }
    else {
      result(null, res);
    }
  });
};

module.exports = Product;