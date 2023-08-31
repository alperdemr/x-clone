import { prisma } from "../libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getPosts = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser?.id) {
    return [];
  }
  try {
    const posts = await prisma.post.findMany({
      where: {
        userId: currentUser.id,
      },
      include: {
        user: true,
      },
    });
    return posts;
  } catch (error: any) {
    return [];
  }
};

export default getPosts;
