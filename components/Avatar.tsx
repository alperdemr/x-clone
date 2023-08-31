"use client";

import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import Image from "next/image";

interface AvatarProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
  user?:User
}

const Avatar:React.FC<AvatarProps> = ({
  userId,
  isLarge,
  hasBorder,
  user
}) => {
  const router = useRouter()

  const onClick = useCallback((e:any) => {
    e.stopPropagation()
    router.push(`/users/${userId}`)
  },[router,userId])

  return (
    <div
      className={`
        ${hasBorder ? 'border-4 border-black' : ''}
        ${isLarge ? 'h-32' : 'h-12'}
        ${isLarge ? 'w-32' : 'w-12'}
        rounded-full 
        hover:opacity-90 
        transition 
        cursor-pointer
        relative
      `}
    >
      <Image
        fill
        style={{
          objectFit: 'cover',
          borderRadius: '100%'
        }}
        alt="Avatar"
        onClick={onClick}
        src={user?.profileImage || '/images/placeholder.png'}
      />
    </div>
  );
};

export default Avatar;
