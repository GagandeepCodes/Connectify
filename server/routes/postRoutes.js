import express from "express";
import userAuth from "../middleware/authMiddleware.js";
import { createPost, getComments, getPost, getPosts, getUserPost, likePost } from "../controllers/postController.js";

const router = express.Router();

//create post
router.post("/create-post" , userAuth , createPost);

//get posts
router.post("/" , userAuth , getPosts);
router.post("/:id" , userAuth , getPost);
router.post("/get-user-post/:id", userAuth , getUserPost);

//get comments
router.get("/comments/:postId" , getComments);

//likes and comments on posts
router.post("/like/:id" , userAuth , likePost);
export default router;