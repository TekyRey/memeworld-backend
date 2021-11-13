const {
    createMessage,
    getMessages,
    getMessageById,
    updateMessage,
    deleteMessage,
    
  } = require("./post.service");
  const {insertMessages, updateMessages} = require("../../schema/messagesSchema");
  module.exports = {
 
    // create follower controller
    createMessageController: (req, res) => {
        const body = req.body;
        const validationResult = insertMessages.validate(body);
        if (validationResult.error) {
          // 400 bad request
          return res.status(400).send(validationResult.error.details[0].message);
        }
    
        
        createMessage(body, (err, results) => {
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
    
      //getMessageById controller
      getMessageByIdController: (req, res) => {
        const user_id = req.params.user_id;
        getMessageById(user_id, (err, results) => {
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
    
      // get Follower controller
      getMessagesController: (req, res) => {
        getMessages((err, results) => {
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
    
      // update Follower controller
      updateMessageController: (req, res) => {
        const body = req.body;
        const validationResult = updateMessages.validate(body);
        if (validationResult.error) {
          // 400 bad request
          return res.status(400).send(validationResult.error.details[0].message);
        }
       
    
        updateMessage(body, (err, results) => {
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
    
      // delete Follower controller
      deleteMessage,Controller: (req, res) => {
        const data = req.body;
        deleteMessage,(data, (err, results) => {
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
  