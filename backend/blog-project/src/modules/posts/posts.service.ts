import { PrismaClient } from '@prisma/client';
import { CreatePostDto } from './dto/posts.dto';
const prisma = new PrismaClient();

class PostService {
  /**
   * @param postData 
   * @param authorId
   */
  public async createPost(postData: CreatePostDto, authorId: number) {
    const { title, content } = postData;
    
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        author: {
          connect: { id: authorId }, // Kết nối với user thông qua authorId
        },
      },
    });

    return newPost;
  }

}

export const postService = new PostService();