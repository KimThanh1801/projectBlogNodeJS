import { Router } from 'express';
import { postController } from './posts.controllers';
// import { authMiddleware } from '../../middleware/auth.middleware'; // (Tùy chọn) Middleware xác thực

const router = Router();

// Endpoint để tạo một bài post mới
// POST /api/posts/
router.post('/', /* authMiddleware, */ postController.createPost);

// Các endpoint khác: GET, PUT, DELETE...

export default router;