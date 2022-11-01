const router = require("express").Router();

const { Module } = require("module");
const {
  getUser,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController");

router.route("/").get(getUser).post(createUser);

router.route("/:userId").get(getOneUser).put(updateUser).delete(deleteUser);

Module.exports = router;