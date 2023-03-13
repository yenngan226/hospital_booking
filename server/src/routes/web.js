import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("", homeController.getHomePage);
  router.get("/post-crud", homeController.getCRUD);
  router.post("/post-crud", homeController.postCRUD);
  router.get("/read-crud", homeController.readCRUD);
  router.get("/users/:userId", homeController.getUserInfo);
  router.put("/user/:userId", homeController.updateUserInfo);
  router.delete("/user/delete/:userId", homeController.deleteUser);
  router.post("/api/user/login", userController.handleLogin);
  return app.use("/", router);
};

module.exports = initWebRoutes;
