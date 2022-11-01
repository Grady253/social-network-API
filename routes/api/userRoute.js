const router = require("express").Router();

const {
  getUser,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require("../../controllers/userController");

router.route("/")
  .get(getUser)
  .post(createUser);

router.route("/:userId")
  .get(getOneUser)
  .put(updateUser)
  .delete(deleteUser);

router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

Module.exports = router;