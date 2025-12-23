export interface CreatePostDto {
  userId: number;
  content: string;
  emoji?: string;
  image?: string;
}


export interface UpdatePostDto {
  content: string;
}


export interface CreateCommentDto {
  postId: number;
  author: string;
  content: string;
}