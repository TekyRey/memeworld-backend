const {
    createUserController,
    getUsersController,
    getUserByUserIdController,
    updateUserController,
    deleteUserController,
    loginController,
    verifyUserTokenController,
} = require("./user.controller");
  const router = require("express").Router();
  const { verifyToken } = require("../../auth/token_validation");
  
  router.post("/", verifyToken(), createUserController);
  router.get("/", verifyToken(), getUsersController);
  router.get(
    "/:id",
    verifyToken(),
    getUserByUserIdController
  );
  router.patch(
    "/",
    verifyToken(),
    updateUserController
  );
  router.delete("/",verifyToken(), deleteUserController);
  router.post("/login", loginController);
  router.post("/verify", verifyToken(), verifyUserTokenController);
  module.exports = router;
  