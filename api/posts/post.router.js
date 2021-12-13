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
   const multer = require("multer");
  const path = require("path");
  const DIR = "./public/media";
  
  let storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, DIR);
    },
    filename: function (req, file, cb) {
      const filenem =
        file.fieldname + "-" + Date.now() + path.extname(file.originalname);

      cb(null, filenem);
    },
  });

  let upload = multer({ storage: storage });
  const router = require("express").Router();
  const { verifyToken } = require("../../auth/token_validation");
  
   //post likes routes
   router.post("/favorites", verifyToken(), createPostFavoriteController);
   router.get("/favorites", verifyToken(), getPostFavoritesController);
   router.get("/favorites:id",verifyToken(),getPostFavoriteByUserIdController);
   router.patch("/favorites",verifyToken(),updatePostFavoriteController);
   router.delete("/favorites",verifyToken(), deletePostFavoriteController);


 
 //posts routes
   router.post("/", verifyToken(),  upload.single("profile"), createPostController);
   router.get("/", verifyToken(), getPostsController);
   router.get("/:id",verifyToken(),getPostByIdController);
   router.patch("/",verifyToken(),updatePostController);
   router.delete("/",verifyToken(), deletePostController);

  //categories routes
  router.post("/categories", verifyToken(),  createCategoryController);
  router.get("/categories", verifyToken(), getCategoriesController);
  router.get("categories/:id",verifyToken(),getCategoryByIdController);
  router.patch("/categories",verifyToken(),updateCategoryController);
  router.delete("/categories",verifyToken(), deleteCategoryController);

   //post likes routes
   router.post("/likes", verifyToken(), createPostLikeController);
   router.get("/likes", verifyToken(), getPostLikesController);
   router.get("/likes:id",verifyToken(),getPostLikeByUserIdController);
   router.patch("/likes",verifyToken(),updatePostLikeController);
   router.delete("/likes",verifyToken(), deletePostLikeController);

 
  module.exports = router;
  