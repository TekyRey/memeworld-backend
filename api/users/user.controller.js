const {
    createUser,
    getUsers,
    getUserByUserId,
    updateUser,
    deleteUser,
    getUserByEmail,
  } = require("./user.service");
  const { genSaltSync, hashSync, compareSync } = require("bcrypt");
  const { sign } = require("jsonwebtoken");
  const { insertSchema, updateSchema } = require("../../schema/usersSchema");
  module.exports = {
    // create user controller
    createUserController: (req, res) => {
      const body = req.body;
      const validationResult = insertSchema.validate(body);
      if (validationResult.error) {
        // 400 bad request
        return res.status(400).send(validationResult.error.details[0].message);
      }
  
      const salt = genSaltSync(10);
      body.password = hashSync(body.password, salt);
      createUser(body, (err, results) => {
        if (err) {
          console.log(err.sqlMessage);
          return res.status(500).json({
            errorCode: 500,
            errorMessage: "Internal Server Error",
          });
        }
        return res.status(200).json({
          success: 1,
          data: results,
        });
      });
    },
  
    //getUserById controller
    getUserByUserIdController: (req, res) => {
      const id = req.params.id;
      getUserByUserId(id, (err, results) => {
        if (err) {
          console.log(err.sqlMessage);
          return res.status(500).json({
            errorCode: 500,
            errorMessage: "Internal Server Error",
          });
        }
        if (!results[0]) {
          return res.status(204).json({
            errorCode: 204,
            errorMessage: "Record not found",
            // will not be returned anyways...
          });
        }
        results[0].password = undefined; //should not return password
        return res.json({
          success: 1,
          data: results[0],
        });
      });
    },
  
    //verify token controller
    verifyUserTokenController: (req, res) => {
      const token = req.params.token;
      return res.json({
        success: 1,
        data: "token was verified",
      });
    },
  
    // get users controller
    getUsersController: (req, res) => {
      getUsers((err, results) => {
        if (err) {
          console.log(err.sqlMessage);
          return res.status(500).json({
            errorCode: 500,
            errorMessage: "Internal Server Error",
          });
        }
        if (!results) {
          return res.status(204).json({
            errorCode: 204,
            errorMessage: "Records not found",
            // will not be returned anyways
          });
        }
        // results.password = undefined; //should not return password
        return res.json({
          success: 1,
          data: results,
        });
      });
    },
  
    // update user controller
    updateUserController: (req, res) => {
      const body = req.body;
      const validationResult = updateSchema.validate(body);
      if (validationResult.error) {
        // 400 bad request
        return res.status(400).send(validationResult.error.details[0].message);
      }
      if (body.password) {
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
      }
  
      updateUser(body, (err, results) => {
        if (err) {
          console.log(err.sqlMessage);
          return res.status(500).json({
            errorCode: 500,
            errorMessage: "Internal Server Error",
          });
        }
        if (!results.affectedRows) {
          return res.status(501).json({
            errorCode: 501,
            errorMessage: "Not Implemented",
          });
        }
        return res.json({
          success: 1,
          message: "updated successfully",
        });
      });
    },
  
    // delete user controller
    deleteUserController: (req, res) => {
      const data = req.body;
      deleteUser(data, (err, results) => {
        if (err) {
          console.log(err.sqlMessage);
          return res.status(500).json({
            errorCode: 500,
            errorMessage: "Internal Server Error",
          });
        }
        if (!results) {
          return res.status(204).json({
            errorCode: 204,
            errorMessage: "Record not found",
          });
        }
        return res.json({
          success: 1,
          message: "record deleted successfuly",
        });
      });
    },
  
    // login controller
    loginController: (req, res) => {
      const body = req.body;
      getUserByEmail(body.email, (err, results) => {
        if (err) {
          console.log(err.sqlMessage);
          return res.status(500).json({
            errorCode: 500,
            errorMessage: "Internal Server Error",
          });
        }
        if (!results) {
          return res.status(400).json({
            errorCode: 400,
            errorMessage: "Incorrect email",
          });
        }
  
        const result = compareSync(body.password, results.password);
        if (result) {
          if (results.can_login === 0) {
            return res.json({
              success: 2,
              message: "Login has been disabled by admin",
            });
          } else {
            results.password = undefined;
            const jsontoken = sign({ result: results }, process.env.SECRET, {
              expiresIn: "10h",
            });
            return res.json({
              success: 1,
              message: "logged in successfully",
              token: jsontoken,
              name: `${results.first_name} ${results.last_name}`,
              role: results.permission_level,
              login: results.staff_id,
            });
          }
        } else {
          return res.status(400).json({
            errorCode: 400,
            errorMessage: "Incorrect password",
          });
        }
      });
    },
  
   
  };
  