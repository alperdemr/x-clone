import { User, Post, Comment } from "@prisma/client";

export type FullPostType = Post & {
  user: User;
  comments: Comment[];
};
