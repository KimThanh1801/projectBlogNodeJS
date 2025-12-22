import { Router } from 'express';
import postRoutes from '../modules/posts/posts.routes'; // <-- 1. Import route của post

const router = Router();

router.use('/posts', postRoutes); // <-- 2. Sử dụng route của post với prefix /posts

export default router;