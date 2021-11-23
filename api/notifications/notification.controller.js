const {
    createNotification,
    getNotifications,
    getNotificationById,
    updateNotification,
    deleteNotification,
    
  } = require("./notification.service");
  const {insertNotifications, updateNotifications} = require("../../schema/notificationsSchema");
  module.exports = {
 
    // create notification controller
    createNotificationController: (req, res) => {
        const body = req.body;
        const validationResult = insertNotifications.validate(body);
        if (validationResult.error) {
          // 400 bad request
          return res.status(400).send(validationResult.error.details[0].message);
        }
    
        
        createNotification(body, (err, results) => {
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
    
      //getNotificationById controller
      getNotificationByIdController: (req, res) => {
        const id = req.params.id;
        getNotificationById(id, (err, results) => {
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
    
      // get notification controller
      getNotificationsController: (req, res) => {
        getNotifications((err, results) => {
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
    
      // update notification controller
      updateNotificationController: (req, res) => {
        const body = req.body;
        const validationResult = updateNotifications.validate(body);
        if (validationResult.error) {
          // 400 bad request
          return res.status(400).send(validationResult.error.details[0].message);
        }
       
    
        updateNotification(body, (err, results) => {
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
    
      // delete notification controller
      deleteNotificationController: (req, res) => {
        const data = req.body;
        deleteNotification(data, (err, results) => {
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
  