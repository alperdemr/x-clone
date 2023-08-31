"use client";

import { Post } from "@prisma/client";
import PostItem from "./PostItem";
import { PostWithUser } from "@/app/types";

interface PostFeedProps {

    posts: PostWithUser[];
    userId: string;
    
}

const PostFeed: React.FC<PostFeedProps> = ({ posts, userId }) => {
  return (
    <>
      {posts.map((post) => (
        <PostItem key={post.id} data={posts} userId={userId} />
      ))}
    </>
  );
};

export default PostFeed;
