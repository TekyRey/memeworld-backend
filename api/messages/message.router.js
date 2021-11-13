const {
    createMessageController,
    getMessagesController,
    getMessageByIdController,
    updateMessageController,
    deleteFollowerController,
    
  } = require("./follower.controller");
  const router = require("express").Router();
  const { verifyToken } = require("../../auth/token_validation");
 
 //posts routes
   router.post("/", verifyToken(), createMessageController);
   router.get("/", verifyToken(), getMessagesController,);
   router.get("/:id",verifyToken(),getMessageByIdController);
   router.patch("/",verifyToken(),updateMessageController);
   router.delete("/",verifyToken(), deleteFollowerController);

 
  module.exports = router;
  