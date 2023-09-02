import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prismadb";

export async function POST(
  request: Request,
  { params }: { params: { postId: string } }
) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }
  const postId = params.postId;
  if (!postId || typeof postId !== "string") {
    throw new Error("Invalid ID");
  }

  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });

  if (!post) {
    return NextResponse.error();
  }

  const likedIds = [...(post.likedIds || [])];

  if (likedIds.includes(currentUser.id)) {
    const index = likedIds.indexOf(currentUser.id);
    likedIds.splice(index, 1);
  } else {
    likedIds.push(currentUser.id);
  }

  const updatedPost = await prisma.post.update({
    where: {
      id: postId,
    },
    data: {
      likedIds: likedIds,
    },
  });

  return NextResponse.json(updatedPost);
}
