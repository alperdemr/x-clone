import getCurrentUser from "@/app/actions/getCurrentUser";
import getPosts from "@/app/actions/getPosts";
import { prisma } from "@/app/libs/prismadb";
import Header from "@/components/Header";
import PostFeed from "@/components/posts/PostFeed";
import UserBio from "@/components/users/UserBio";
import UserHero from "@/components/users/UserHero";

const Profile = async ({ params }: { params: { userId: string } }) => {
  const currentUser = await getCurrentUser();
  const user = await prisma.user.findUnique({
    where: {
      id: params.userId,
    },
  });
  const posts = await getPosts();
  return (
    <>
      <Header showBackArrow label={currentUser?.name as string} />
      <UserHero user={user} userId={params.userId} />
      <UserBio userId={params.userId} user={user} currentUser={currentUser} />
      <PostFeed
        posts={posts}
        userId={params.userId}
        currentUser={currentUser}
      />
    </>
  );
};

export default Profile;
