const router = require('express').Router();
const PostController = require('../controllers/posts.controllers');

//fetch post
router.post("/create", PostController.Createpost);
router.put("/:id", PostController.Updatepost);
router.delete("/:id", PostController.Deletepost);
router.put("/:id/like", PostController.LikeDislikePost);
router.put("/:id/comment", PostController.CommentUncommentPost);
router.get("/:id", PostController.GetPost);
router.get("/timeline/all", PostController.GetTimelinePost);


module.exports = router;
