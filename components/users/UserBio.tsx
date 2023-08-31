"use client";

import { User } from "@prisma/client";
import Button from "../Button";
import { BiCalendar } from "react-icons/bi";
import { useMemo } from "react";
import { format } from "date-fns";

interface UserBioProps {
  userId: string;
  user: User;
  currentUser: User;
}

const UserBio: React.FC<UserBioProps> = ({ userId, user,currentUser }) => {
  const createdAt = useMemo(() => {
    if (!user?.createdAt) {
      return null;
    }

    return format(new Date(user.createdAt), "MMMM yyyy");
  }, [user?.createdAt]);

  return (
    <div className=" border-b-[1px] pb-4">
      <div className=" flex justify-end p-2">
        {currentUser?.id === userId ? (
          <Button secondary label="Edit" onClick={() => {}} />
        ) : (
          <>
            <Button
              onClick={() => {}}
              label={
                currentUser?.followingIds?.includes(userId) ? "Unfollow" : "Follow"
              }
            />
          </>
        )}
      </div>
      <div className=" mt-8 px-4">
        <div className=" flex flex-col">
          <p className=" text-2xl font-semibold">{user.name}</p>
          <p className="text-md text-neutral-500">@{user?.username}</p>
        </div>
        <div className="flex flex-col mt-4">
          <p className="">{user?.bio}</p>
          <div
            className="
              flex 
              flex-row 
              items-center 
              gap-2 
              mt-4 
              text-neutral-500
          "
          >
            <BiCalendar size={24} />
            <p>Joined {createdAt}</p>
          </div>
        </div>
        <div className="flex flex-row items-center mt-4 gap-6">
          <div className="flex flex-row items-center gap-1">
            <p className="">{user?.followingIds?.length}</p>
            <p className="text-neutral-500">Following</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <p className="">{user?.followersCount || 0}</p>
            <p className="text-neutral-500">Followers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBio;
