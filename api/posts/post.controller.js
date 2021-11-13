const {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost,
    createPostLike,
    getPostLikes,
    updatePostLike,
    getPostLikeByUserId,
    deletePostLike,
  } = require("./post.service");
  const { insertCategories, updateCategories, insertPosts, updatePosts, insertPostLikes, updatePostLikes } = require("../../schema/postsSchema");
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
  
   //posts controllers

    // create post controller
    createPostController: (req, res) => {
        const body = req.body;
        const validationResult = insertPosts.validate(body);
        if (validationResult.error) {
          // 400 bad request
          return res.status(400).send(validationResult.error.details[0].message);
        }
    
        
        createPost(body, (err, results) => {
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
    
      //getPostById controller
      getPostByIdController: (req, res) => {
        const id = req.params.id;
        getPostById(id, (err, results) => {
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
    
      // get posts controller
      getPostsController: (req, res) => {
        getPosts((err, results) => {
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
          return res.json({
            success: 1,
            data: results,
          });
        });
      },
    
      // update post controller
      updatePostController: (req, res) => {
        const body = req.body;
        const validationResult = updatePosts.validate(body);
        if (validationResult.error) {
          // 400 bad request
          return res.status(400).send(validationResult.error.details[0].message);
        }
       
    
        updatePost(body, (err, results) => {
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
    
      // delete post controller
      deletePostController: (req, res) => {
        const data = req.body;
        deletePost(data, (err, results) => {
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


      //post likes
       // create category controller
    createPostLikeController: (req, res) => {
        const body = req.body;
        const validationResult = insertPostLikes.validate(body);
        if (validationResult.error) {
          // 400 bad request
          return res.status(400).send(validationResult.error.details[0].message);
        }
    
        
        createPostLike(body, (err, results) => {
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
    
      //getPostyById controller
      getPostLikeByUserIdController: (req, res) => {
        const user_id = req.params.user_id;
        getPostLikeByUserId(user_id, (err, results) => {
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
    
      // get post likes controller
      getPostLikesController: (req, res) => {
        getPostLikes((err, results) => {
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
      updatePostLikeController: (req, res) => {
        const body = req.body;
        const validationResult = updatePostLikes.validate(body);
        if (validationResult.error) {
          // 400 bad request
          return res.status(400).send(validationResult.error.details[0].message);
        }

        updatePostLike(body, (err, results) => {
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
      deletePostLikeController: (req, res) => {
        const data = req.body;
        deletePostLike(data, (err, results) => {
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
  