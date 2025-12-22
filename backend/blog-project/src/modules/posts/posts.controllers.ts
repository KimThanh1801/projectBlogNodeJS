import { Request, Response, NextFunction } from 'express';
import { postService } from './posts.service';
import { CreatePostDto } from './dto/posts.dto';

class PostController {
  public async createPost(req: Request, res: Response, next: NextFunction) {
    try {
      const postData: CreatePostDto = req.body;
      
      // Giả sử bạn đã có middleware xác thực và lấy được user từ req
      // const userId = (req as any).user.id;
      const userId = 1; // Tạm thời hardcode userId = 1 để test

      const newPost = await postService.createPost(postData, userId);

      res.status(201).json({ data: newPost, message: 'Post created successfully' });
    } catch (error) {
      next(error); // Chuyển lỗi đến error handler
    }
  }
}

export const postController = new PostController();