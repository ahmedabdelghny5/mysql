const connection = require("../../DP/connection");

// get all users
const getAllUser = (req, res, next) => {
  const query = `SELECT * FROM users`;
  connection.execute(query, (error, result) => {
    if (error) {
      res.json({ message: "failed", Error: error });
    } else if (result) {
      res.json({ message: "success", data: result });
    }
  });
};

// get all user with products 
const getAllWithProduct = (req, res, next) => {
  const query = `SELECT * FROM  users INNER JOIN notes on users.id = notes.userId `;
  connection.execute(query, (error, result) => {
    if (error) {
      res.json({ message: "failed", Error: error });
    } else if (result) {
      res.json({ message: "success", data: result });
    }
  });
}


// add user
const addUser = (req, res, next) => {
  const { name, email, age } = req.body;
  connection.execute(`select * from users where email ='${email}'`, (error, result) => {
    if (error) {
      res.json({ msg: "error", Error: error });
    } else {
      if (result.length > 0) {
        console.log(result);
        res.json({ msg: "user already exist" })
      } else {
        const query = `INSERT INTO users ( name,email,age) VALUES ('${name}','${email}',${age})`;
        connection.execute(query, (error, result) => {
          if (error) {
            res.json({ message: "error 2", Error: error });
          } else {
            console.log(result);
            if (result.affectedRows>0) {
              res.json({ message: " success " });
            } else {
              res.json({ message: "not done" })
            }
          }
        });
      }
    }
  })
};



// delete user
const deleteUser = (req, res, next) => {
  const { id } = req.query;
  const query = `DELETE FROM users WHERE id = ${id}`;
  connection.execute(query, (err, result) => {
    if (err) {
      res.json({ message: "error", Error: err })
    } else {
      
      if (result.affectedRows > 0) {
        res.json({ message: "user deleted succesfully" })
      } else {
        res.json({ message: "user not found " })
      }
    }
  }
  )


};

// update user
const updateUser = (req, res, next) => {
  const { id, name, email, age } = req.body;
  const query = `UPDATE users SET name ='${name}',email ='${email}',age =${age} WHERE id=${id} `;
  connection.execute(query, (error, result) => {
    if (error) {
      res.json({ message: "error", Error: error })
    } else if (result.affectedRows>0) {
      // console.log(result);
      res.json({ message: "success" })

    }else{
      res.json({ message: "not found"})
    }
  }
  )
};

// search for user where his name start with "a" and age less than 30 =>
const searchUser = (req, res, next) => {
  const { search,age } = req.query;
  const query = `Select * from  users where name like "%${search}%" AND age >${age} `;
  connection.execute(query, (error, result) => {
    if (error) {
      res.json({ message: "failed", Error: error });
    } else {
      res.json({ message: "success", data: result });
    }
  });

};


//search for users by list of ids => using IN
const serachById = (req, res, next) => {
  const { id } = req.query
  const query = `select * from users where id IN (${id})`;
  connection.execute(query, (err, result) => {
    if (err) {
      res.json({ message: "fail", Error: err })
    } else {
      res.json({ message: "success", data: result })
    }
  }
  )
}


module.exports = {
  getAllUser,
  getAllWithProduct,
  addUser,
  deleteUser,
  updateUser,
  searchUser,
  serachById
};
