import getCurrentUser from "@/app/actions/getCurrentUser";
import { prisma } from "@/app/libs/prismadb";
import { NextResponse } from "next/server";



export async function POST(req: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await req.json();
    const { body: postBody } = body;

    if (!currentUser) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const newPost = await prisma.post.create({
      data: {
        body: postBody,
        userId: currentUser.id,
      },
    });
    return NextResponse.json(newPost);
  } catch (error) {
    console.log(error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
