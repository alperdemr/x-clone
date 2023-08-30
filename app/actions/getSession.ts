import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/options";

export default async function getSession() {
    return await getServerSession(options);
  }