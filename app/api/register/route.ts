import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prismadb";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, username, name, password } = body;
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await prisma.user.create({
    data: {
      email,
      username,
      name,
      hashedPassword,
    },
  });
  return NextResponse.json(user);
}
