const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth } = require("../middleware/auth");

//Post Routes 
//Since linked from server JS treat each path as:
//post/:id, post/createPost, post/likePost, post/deletePost/:id

router.get("/:id", ensureAuth, postsController.getPost);

//Enables user to create post with cloudinary for media uploads
router.post("/createPost", upload.single("file"), postsController.createPost);

//Enables user to like post. In controller uses POST model to update likes by 1
router.put("/likePost/:id", postsController.likePost);

//Enables user to delete post. in controller, uses Post model to delete from mongoDB
router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;
