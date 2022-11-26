const router = require("express").Router();
const {
  addComment,
  removeComment,
  addReply,
  removeReply,
} = require("../../controllers/comment-controller");

// route for /api/comments/:pizzaId
// use addComment() method as a POST callback
router.route("/:pizzaId").post(addComment);

// route for /api/comments/:pizzaId/:commentId
// use removeComment() method as a DELETLE callback
router.route("/:pizzaId/:commentId").put(addReply).delete(removeComment);

// DELETE route to handle removeReply
router.route("/:pizzaId/:commentId/:replyId").delete(removeReply);

module.exports = router;
