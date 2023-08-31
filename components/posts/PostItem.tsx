import { Post, User } from "@prisma/client";
import Avatar from "../Avatar";
import { FullPostType } from "@/app/types";
import { formatDistanceToNowStrict } from "date-fns";
import { useMemo } from "react";

interface PostItemProps {
  userId: string;
  data: FullPostType;
  currentUser: User;
}

const PostItem: React.FC<PostItemProps> = ({ userId, data, currentUser }) => {
  const createdAt = useMemo(() => {
    if (!data?.createdAt) {
      return null;
    }

    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data.createdAt])
  return (
    <div
      onClick={() => {}}
      className=" border-b-[1px] p-5 cursor-pointer hover:bg-slate-200 transition "
    >
      <div className=" flex flex-row items-center gap-2">
        <Avatar userId={data.userId} />
        <div>
          <div className=" flex flex-row items-center gap-2">
            <p
              className=" font-semibold cursor-pointer hover:underline"
              onClick={() => {}}
            >
              {data.user.name}
            </p>
            <span
              className=" cursor-pointer hover:underline hidden md:block"
              onClick={() => {}}
            >
              @{currentUser.username}
            </span>
            <span className=" text-sm">
              {createdAt}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
