const express = require("express");

const { UserController } = require("./controllers");
const { authorization, isAdmin } = require("./middlewares/authentication");

const router = express.Router();

router.post("/users/register", UserController.register);
router.post("/users/login", UserController.login);
router.get("/users", authorization, isAdmin, UserController.browse);
router.get("/users/logout", authorization, UserController.logout);
router.put("/users/:id", UserController.edit);
router.delete("/users/:id", UserController.delete);

module.exports = router;
