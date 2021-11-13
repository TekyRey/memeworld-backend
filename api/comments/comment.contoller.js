const {
    createComment,
    getComments,
    getCommentById,
    updateComment,
    deleteComment,
    createCommentLike,
    getcommentLikes,
    updateCommentLike,
    getcommentLikeByUserId,
    deleteCommentLike,
  } = require("./comment.service");
  const { insertComments, updateComments, insertCommentLikes, updateCommentLikes } = require("../../schema/commentsSchema");
  module.exports = {
   
   //comment controllers

    // create comment controller
    createCommentController: (req, res) => {
        const body = req.body;
        const validationResult = insertComments.validate(body);
        if (validationResult.error) {
          // 400 bad request
          return res.status(400).send(validationResult.error.details[0].message);
        }
    
        
        createComment(body, (err, results) => {
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
    
      //getCommentById controller
      getCommentByIdController: (req, res) => {
        const id = req.params.id;
        getCommentById(id, (err, results) => {
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
    
      // get comments controller
      getCommentsController: (req, res) => {
        getComments((err, results) => {
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
    
      // update comment controller
      updateCommentController: (req, res) => {
        const body = req.body;
        const validationResult = updateComments.validate(body);
        if (validationResult.error) {
          // 400 bad request
          return res.status(400).send(validationResult.error.details[0].message);
        }
       
    
        updateComment(body, (err, results) => {
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
    
      // delete comment controller
      deleteCommentController: (req, res) => {
        const data = req.body;
        deleteComment(data, (err, results) => {
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


      //comment likes
       // create Comment controller
    createCommentLikeController: (req, res) => {
        const body = req.body;
        const validationResult = insertCommentLikes.validate(body);
        if (validationResult.error) {
          // 400 bad request
          return res.status(400).send(validationResult.error.details[0].message);
        }
    
        
        createCommentLike(body, (err, results) => {
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
    
      //getcommentyById controller
      getcommentLikeByUserIdController: (req, res) => {
        const user_id = req.params.user_id;
        getcommentLikeByUserId(user_id, (err, results) => {
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
    
      // get comment likes controller
      getcommentLikesController: (req, res) => {
        getcommentLikes((err, results) => {
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
    
      // update Comment controller
      updateCommentLikeController: (req, res) => {
        const body = req.body;
        const validationResult = updateCommentLikes.validate(body);
        if (validationResult.error) {
          // 400 bad request
          return res.status(400).send(validationResult.error.details[0].message);
        }

        updateCommentLike(body, (err, results) => {
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
    
      // delete Comment controller
      deleteCommentLikeController: (req, res) => {
        const data = req.body;
        deleteCommentLike(data, (err, results) => {
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
  