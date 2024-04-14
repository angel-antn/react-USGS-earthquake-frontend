export interface UserResponse {
  token: string;
  user: User;
}

export interface User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}
