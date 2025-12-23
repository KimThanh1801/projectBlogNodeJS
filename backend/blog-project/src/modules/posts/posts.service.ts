import { CreateCommentDto, CreatePostDto, UpdatePostDto } from "./dto/posts.dto";


export interface Post {
  id: number;
  userId: number;
  content: string;
  createdAt: Date;
  emoji?: string;
  image?: string;
}


const posts: Post[] = [];


export class PostsService {
  static createPost(data: CreatePostDto): Post {
    if (!data.content || data.content.trim() === "") {
      throw new Error("Nội dung bài viết không được để trống");
    }


    const newPost: Post = {
      id: posts.length + 1,
      userId: data.userId,
      content: data.content,
      emoji: data.emoji,
      image: data.image,
      createdAt: new Date(),
      comments: []
    };


    posts.push(newPost);
    return newPost;
  }


  static getAllPosts(): Post[] {
    return posts;
  }


  static updatePost(id: number, data: UpdatePostDto): Post {
    const post = posts.find((p) => p.id === id);
    if (!post) throw new Error("Bài viết không tồn tại");


    post.content = data.content;
    return post;
  }


  static deletePost(id: number): void {
    const index = posts.findIndex((p) => p.id === id);
    if (index === -1) throw new Error("Bài viết không tồn tại");
    posts.splice(index, 1);
  }
  static addComment(data: CreateCommentDto) {
    const post = posts.find((p) => p.id === data.postId);
    if (!post) throw new Error("Bài viết không tồn tại");


    const newComment: Commentnt = {
      id: Date.now(),
      author: data.author,
      content: data.content,
    };


    post.comments.push(newComment);
    return newComment;
  }
}
