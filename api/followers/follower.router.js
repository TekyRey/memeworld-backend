const {
    createFollowerController,
    getFollowersController,
    getFollowerByIdController,
    updateFollowerController,
    deleteFollowerController,
    
  } = require("./post.controller");
  const router = require("express").Router();
  const { verifyToken } = require("../../auth/token_validation");
 
 //posts routes
   router.post("/", verifyToken(), createFollowerController);
   router.get("/", verifyToken(), getFollowersController);
   router.get("/:id",verifyToken(),getFollowerByIdController);
   router.patch("/",verifyToken(),updateFollowerController);
   router.delete("/",verifyToken(), deleteFollowerController);

 
  module.exports = router;
  