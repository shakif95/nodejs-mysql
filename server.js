const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'test message'});
});

require("./app/routes/product.routes.js")(app);

app.listen(4000, () => {
  console.log('app is running on port 4000');
});