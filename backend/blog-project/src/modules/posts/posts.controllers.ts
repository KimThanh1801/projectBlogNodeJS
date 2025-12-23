import { Request, Response } from "express";
import multer from "multer";
import { PostsService } from "./posts.service";


const upload = multer({ dest: "uploads/" });


// Mở rộng Request để nhận file từ multer
interface MulterRequest extends Request {
  file?: Express.Multer.File;
}


export class PostsController {
  // Lưu tạm bài viết trong memory
  static posts: any[] = PostsService.getAllPosts();


  // Tạo bài viết
  static createPost = [
    upload.single("image"),
    (req: MulterRequest, res: Response) => {
      try {
        const { userId, content, emoji } = req.body;
        const image = req.file?.filename;


        const post = PostsService.createPost({
          userId: Number(userId),
          content,
          emoji,
          image,
          likes: 0,
          likedBy: [],
          comments: [],
          shares: 0,
          createdAt: new Date().toISOString(),
        });


        res.json(post);
      } catch (err: any) {
        res.status(400).json({ message: err.message });
      }
    },
  ];


  // Chỉnh sửa bài viết
  static editPost = [
    upload.single("image"),
    (req: MulterRequest, res: Response) => {
      try {
        const postId = parseInt(req.params.id!);
        const { content, emoji } = req.body;
        const image = req.file?.filename;


        const post = PostsController.posts.find(p => p.id === postId);
        if (!post) return res.status(404).json({ message: "Post not found" });


        if (content !== undefined) post.content = content;
        if (emoji !== undefined) post.emoji = emoji;
        if (image !== undefined) post.image = image;


        res.json(post);
      } catch (err: any) {
        res.status(400).json({ message: err.message });
      }
    },
  ];


  // Xóa bài viết
  static deletePost(req: Request, res: Response) {
    const postId = parseInt(req.params.id!);
    const index = PostsController.posts.findIndex(p => p.id === postId);
    if (index === -1) return res.status(404).json({ message: "Post not found" });


    const deletedPost = PostsController.posts.splice(index, 1)[0];
    res.json({ message: "Post deleted", post: deletedPost });
  }


  // Thêm bình luận
  static addComment(req: Request, res: Response) {
    const postId = parseInt(req.params.id!);
    const { author, content } = req.body;


    const post = PostsController.posts.find(p => p.id === postId);
    if (!post) return res.status(404).json({ message: "Post not found" });


    const newComment = {
      id: Date.now(),
      author,
      content,
      createdAt: new Date().toISOString(),
    };


    post.comments = post.comments || [];
    post.comments.push(newComment);


    res.status(201).json(newComment);
  }


  // Lấy tất cả comment
  static getComments(req: Request, res: Response) {
    const postId = parseInt(req.params.id!);


    const post = PostsController.posts.find(p => p.id === postId);
    if (!post) return res.status(404).json({ message: "Post not found" });


    res.json(post.comments || []);
  }


  // Toggle like bài viết
  static likePost(req: Request, res: Response) {
    const postId = parseInt(req.params.id!);


    const post = PostsController.posts.find(p => p.id === postId);
    if (!post) return res.status(404).json({ message: "Post not found" });


    if (!post.likes) post.likes = 0;


    // Tăng giảm like
    post.likes = (post.likes || 0) + 1;


    res.json({ likes: post.likes });
  }


  // Lấy tất cả bài viết
  static getAllPosts(req: Request, res: Response) {
    res.json(PostsController.posts);
  }
}
