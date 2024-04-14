export interface CommentResponse {
  comments: Comment[];
}

export interface Comment {
  id: number;
  body: string;
  user_name: string;
  user_lastname: string;
}
