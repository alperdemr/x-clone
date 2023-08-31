"use client";

import { Post, User } from "@prisma/client";
import PostItem from "./PostItem";
import { FullPostType } from "@/app/types";

interface PostFeedProps {
  posts: FullPostType[];
  userId: string;
  currentUser: User;
}

const PostFeed: React.FC<PostFeedProps> = ({ posts, userId,currentUser }) => {
  return (
    <>
      {posts.map((post) => (
        <PostItem key={post.id} data={post} userId={userId} currentUser={currentUser} />
      ))}
    </>
  );
};

export default PostFeed;
