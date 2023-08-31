"use client";

import Image from "next/image";
import Avatar from "../Avatar";
import { User } from "@prisma/client";

interface UserHeroProps {
  userId: string;
  user: User;
}

const UserHero: React.FC<UserHeroProps> = ({ userId,user }) => {
  return (
    <div>
      <div className=" bg-slate-200 h-44 relative">
        {user?.coverImage && (
          <Image
            src={user?.coverImage}
            fill
            alt="Cover Image"
            className=" object-cover"
          />
        )}
        <div className=" absolute -bottom-16 left-4">
            <Avatar isLarge hasBorder user={user} userId={userId} />
        </div>
      </div>
    </div>
  );
};

export default UserHero;
