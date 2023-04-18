const connection = require("../../DP/connection");

// get all products
const getAllProducts = (req, res, next) => {
  const querry = `SELECT * FROM notes`;
  connection.execute(querry, (err, result) => {
    if (err) {
      res.send({ message: "fail", Error: err });
    } else {
      res.send({ message: "seccess", data: result });
    }
  });
};

// add product
const addProduct = (req, res, next) => {
  const reqArr = Object.values(req.body);
  const querry = `INSERT INTO notes( title, description, userId) VALUES (?,?,?)`;
  connection.execute(querry, reqArr, (err, result) => {
    if (err) {
      res.send({ message: "fail", Error: err });
    } else {
      if (result.affectedRows) {
        res.send({ message: "success" });
      }
    }
  });
};

//delete product (product owner only )
const deleteProduct = (req, res, next) => {
  const { id, userId } = req.body;
  const querry = `DELETE FROM notes WHERE id = ${id} AND userId = ${userId}`;
  connection.execute(querry, (err, result) => {
    if (err) {
      res.send({ message: "fail", Error: err });
    } else {
      if (result.affectedRows) {
        res.send({ message: "success" });
      }
    }
  });
};

//update product (product owner only )
const updateProduct = (req, res, next) => {
 
  const { title, description,id, userId } = req.body;
  const querry = `UPDATE notes SET title='${title}',description='${description}'  WHERE id=${id} AND userId = ${userId}`;
  connection.execute(querry, (err, result) => {
    if (err) {
      res.send({ message: "fail", Error: err });
    } else {
      if (result.affectedRows) {
        res.send({ message: "success" });
      }else{
        res.send({ message: "not done" });
      
      }
    }
  });
};

// search for products wher greater than 3000
const searchProduct = (req,res,next) => {
    const {limit,age} = req.query;
  const querry = `Select * from notes where price> ${limit}`
  connection.execute(querry,(err,result) => {
    if (err) {
        res.send({ message: "fail", Error: err });
      } else {
      
          res.send({ message: "success",data:result });
    
      }
  }
  )
}
 

module.exports = { getAllProducts, addProduct, deleteProduct, updateProduct ,searchProduct};
