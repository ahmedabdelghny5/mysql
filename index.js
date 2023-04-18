const express = require("express");
const connection = require("./DP/connection");
const app = express();

app.use(express.json());

app.use(require('./modules/Users/User.router.js'))
app.use(require('./modules/products/product.router.js'))

connection
app.listen(3000, () => {
  console.log("server is working ...............");
});
