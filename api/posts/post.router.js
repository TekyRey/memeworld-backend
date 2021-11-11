const {
    createCategoryController,
    getCategoriesController,
    getCategoryByIdController,
    updateCategoryController,
    deleteCategoryController,
  } = require("./post.controller");
  const router = require("express").Router();
  const { verifyToken } = require("../../auth/token_validation");
  
  //categories routes
  router.post("/categories", verifyToken(), createCategoryController);
  router.get("/categories", verifyToken(), getCategoriesController);
  router.get("categories/:id",verifyToken(),getCategoryByIdController);
  router.patch("/categories",verifyToken(),updateCategoryController);
  router.delete("/categories",verifyToken(), deleteCategoryController);
  module.exports = router;
  