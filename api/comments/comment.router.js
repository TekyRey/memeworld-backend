const {
    createCommentController,
    getCommentsController,
    getCommentByIdController,
    updateCommentController,
    deleteCommentController,
    createCommentLikeController,
    getcommentLikeByUserIdController,
    getcommentLikesController,
    deleteCommentLikeController,
  } = require("./comment.contoller");
  const router = require("express").Router();
  const { verifyToken } = require("../../auth/token_validation");
  

 
 //posts routes
   router.post("/", verifyToken(), createCommentController);
   router.get("/", verifyToken(), getCommentsController);
   router.get("/:id",verifyToken(),getCommentByIdController);
   router.patch("/",verifyToken(),updateCommentController);
   router.delete("/",verifyToken(), deleteCommentController);


   //post likes routes
   router.post("/commentlikes", verifyToken(), createCommentLikeController);
   router.get("/commentlikes", verifyToken(), getcommentLikeByUserIdController);
   router.get("/commentlikes:id",verifyToken(),getcommentLikesController);
   router.patch("/commentlikes",verifyToken(),getcommentLikesController);
   router.delete("/commentlikes",verifyToken(), deleteCommentLikeController);

 
  module.exports = router;
  