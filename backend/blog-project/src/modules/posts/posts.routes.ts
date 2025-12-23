import express from "express";
import { PostsController } from "./posts.controllers";


const router = express.Router();


router.get("/", PostsController.getAllPosts);
router.post("/", PostsController.createPost);
router.get("/:id/comments", PostsController.getComments);
router.post("/:id/comments", PostsController.addComment);
router.delete("/:id", PostsController.deletePost);
router.put("/:id", PostsController.editPost);
router.post("/:id/like", PostsController.likePost);


export default router;
