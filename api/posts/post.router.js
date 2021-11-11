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

 
  module.exports = router;
  