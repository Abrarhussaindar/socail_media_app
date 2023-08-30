const router = require('express').Router();
const UserController = require('../controllers/user.controllers');

router.post("/create", UserController.Createuser);
router.get("/", UserController.Getuser);
router.put("/:id", UserController.Updateuser);
router.delete("/:id", UserController.Deleteuser);
router.put("/:id/follow", UserController.Followuser);
router.put("/:id/unfollow", UserController.Unfollowuser);


module.exports = router;
