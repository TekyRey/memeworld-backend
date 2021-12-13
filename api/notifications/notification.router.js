const {
    createNotificationController,
    getNotificationsController,
    getNotificationByIdController,
    updateNotificationController,
    deleteNotificationController,
    
  } = require("./notification.controller");
  const router = require("express").Router();
  const { verifyToken } = require("../../auth/token_validation");
 
 //posts routes
   router.post("/", verifyToken(), createNotificationController);
   router.get("/", verifyToken(), getNotificationsController);
   router.get("/:id",verifyToken(),getNotificationByIdController);
   router.patch("/",verifyToken(),updateNotificationController);
   router.delete("/",verifyToken(), deleteNotificationController);

 
  module.exports = router;
  