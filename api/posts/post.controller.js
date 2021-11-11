const {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
  } = require("./post.service");
  const { insertCategories, updateCategories } = require("../../schema/postsSchema");
  module.exports = {
    // create category controller
    createCategoryController: (req, res) => {
      const body = req.body;
      const validationResult = insertCategories.validate(body);
      if (validationResult.error) {
        // 400 bad request
        return res.status(400).send(validationResult.error.details[0].message);
      }
  
      
      createCategory(body, (err, results) => {
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
  
    //getCategoryById controller
    getCategoryByIdController: (req, res) => {
      const id = req.params.id;
      getCategoryById(id, (err, results) => {
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
        return res.json({
          success: 1,
          data: results[0],
        });
      });
    },
  
    // get categories controller
    getCategoriesController: (req, res) => {
      getCategories((err, results) => {
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
  
    // update category controller
    updateCategoryController: (req, res) => {
      const body = req.body;
      const validationResult = updateCategories.validate(body);
      if (validationResult.error) {
        // 400 bad request
        return res.status(400).send(validationResult.error.details[0].message);
      }
      if (body.password) {
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
      }
  
      updateCategory(body, (err, results) => {
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
  
    // delete category controller
    deleteCategoryController: (req, res) => {
      const data = req.body;
      deleteCategory(data, (err, results) => {
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
  
   
  
   
  };
  