const {
    createCategoryController,
    getCategoriesController,
    getCategoryByIdController,
    updateCategoryController,
    deleteCategoryController,
    createPostController,
    getPostsController,
    getPostByIdController,
    updatePostController,
    deletePostController,
    createPostLikeController,
    getPostLikeByUserIdController,
    getPostLikesController,
    updatePostLikeController,
    deletePostLikeController,
  } = require("./post.controller");
  const router = require("express").Router();
  const { verifyToken } = require("../../auth/token_validation");
  

 
 //posts routes
   router.post("/", verifyToken(), createPostController);
   router.get("/", verifyToken(), getPostsController);
   router.get("/:id",verifyToken(),getPostByIdController);
   router.patch("/",verifyToken(),updatePostController);
   router.delete("/",verifyToken(), deletePostController);

  //categories routes
  router.post("/categories", verifyToken(), createCategoryController);
  router.get("/categories", verifyToken(), getCategoriesController);
  router.get("categories/:id",verifyToken(),getCategoryByIdController);
  router.patch("/categories",verifyToken(),updateCategoryController);
  router.delete("/categories",verifyToken(), deleteCategoryController);

   //post likes routes
   router.post("/postlikes", verifyToken(), createPostLikeController);
   router.get("/postlikes", verifyToken(), getPostLikeByUserIdController);
   router.get("/postlikes:id",verifyToken(),getPostLikesController);
   router.patch("/postlikes",verifyToken(),updatePostLikeController);
   router.delete("/postlikes",verifyToken(), deletePostLikeController);

 
  module.exports = router;
  