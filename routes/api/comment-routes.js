const router = require("express").Router();
const {
  addComment,
  removeComment,
} = require("../../controllers/comment-controller");

// route for /api/comments/:pizzaId
// use addComment() method as a POST callback
router.route("/:pizzaId").post(addComment);

// route for /api/comments/:pizzaId/:commentId
// use removeComment() method as a DELETLE callback 
router.route("/:pizzaId/:commentId").delete(removeComment);

module.exports = router;
