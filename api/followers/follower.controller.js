const {
    createFollower,
    getFollowers,
    getFollowerById,
    updateFollower,
    deleteFollower,
    
  } = require("./post.service");
  const {insertFollowers, updateFollowers} = require("../../schema/followersSchema");
  module.exports = {
 
    // create follower controller
    createFollowerController: (req, res) => {
        const body = req.body;
        const validationResult = insertFollowers.validate(body);
        if (validationResult.error) {
          // 400 bad request
          return res.status(400).send(validationResult.error.details[0].message);
        }
    
        
        createFollower(body, (err, results) => {
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
    
      //getFollowerById controller
      getFollowerByIdController: (req, res) => {
        const user_id = req.params.user_id;
        getFolloweById(user_id, (err, results) => {
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
        const validationResult = updateFollowers.validate(body);
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


  
    
    
  };
  