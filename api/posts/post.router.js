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
    createPostFavoriteController,
    getPostFavoriteByUserIdController,
    getPostFavoritesController,
    updatePostFavoriteController,
    deletePostFavoriteController,
  } = require("./post.controller");
  const router = require("express").Router();
  const { verifyToken } = require("../../auth/token_validation");
  
   //post likes routes
   router.post("/favorites", verifyToken(), createPostFavoriteController);
   router.get("/favorites", verifyToken(), getPostFavoritesController);
   router.get("/favorites:id",verifyToken(),getPostFavoriteByUserIdController);
   router.patch("/favorites",verifyToken(),updatePostFavoriteController);
   router.delete("/favorites",verifyToken(), deletePostFavoriteController);


 
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
   router.post("/likes", verifyToken(), createPostLikeController);
   router.get("/postlikes", verifyToken(), getPostLikesController);
   router.get("/postlikes:id",verifyToken(),getPostLikeByUserIdController);
   router.patch("/postlikes",verifyToken(),updatePostLikeController);
   router.delete("/postlikes",verifyToken(), deletePostLikeController);

 
  module.exports = router;
  