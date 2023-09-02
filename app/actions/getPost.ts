import { prisma } from "../libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getPost = async (postId: string) => {
  const currentUser = await getCurrentUser();
  if (!currentUser?.id) {
    return [];
  }
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });
    return post;
  } catch (error: any) {
    return [];
  }
};

export default getPost;
