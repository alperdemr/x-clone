import Form from "@/components/Form";
import Header from "@/components/Header";
import getCurrentUser from "./actions/getCurrentUser";
import PostFeed from "@/components/posts/PostFeed";
import { prisma } from "./libs/prismadb";
import PostItem from "@/components/posts/PostItem";
import getPosts from "./actions/getPosts";

export default async function Home() {
  const posts = await getPosts();
  const currentUser = await getCurrentUser();
  return (
    <>
      <Header label="Home" />
      <Form placeholder="What is happening?!" currentUser={currentUser} />
      {posts.map((post) => (
        <PostItem data={post} currentUser={currentUser} />
      ))}
    </>
  );
}
