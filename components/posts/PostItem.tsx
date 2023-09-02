"use client";
import { Post, User } from "@prisma/client";
import Avatar from "../Avatar";
import { FullPostType } from "@/app/types";
import { formatDistanceToNowStrict } from "date-fns";
import { useCallback, useMemo } from "react";
import { AiFillHeart, AiOutlineMessage } from "react-icons/ai";
import { useRouter } from "next/navigation";
import useLoginModal from "@/app/hooks/useLoginModal";
import axios from "axios";

interface PostItemProps {
  userId?: string;
  data: FullPostType;
  currentUser: User;
}

const PostItem: React.FC<PostItemProps> = ({ userId, data, currentUser }) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const goToUserProfile = useCallback((e: any) => {
    router.push(`/users/${currentUser.id}`);
  }, []);

  const createdAt = useMemo(() => {
    if (!data?.createdAt) {
      return null;
    }

    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data.createdAt]);

  const likeHandler = useCallback(() => {
    if (!currentUser) {
      loginModal.onOpen();
      return;
    }

    axios.post(`/api/post/${data.id}`);
  }, []);
  return (
    <div className=" border-b-[1px] p-5 cursor-pointer hover:bg-slate-200 transition ">
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
            <span className=" text-sm">{createdAt}</span>
          </div>
          <div className="  mt-1">{data.body}</div>
          <div className=" flex flex-row items-center mt-3 gap-10">
            <div className=" flex flex-row items-center text-neutral-500 gap-2 cursor-pointer transition hover:text-sky-500">
              <AiOutlineMessage />
              <p>{data.comments?.length || 0}</p>
            </div>
            <div
              className=" flex flex-row items-center text-neutral-500 gap-2 cursor-pointer transition hover:text-red"
              onClick={() => {}}
            >
              <AiFillHeart onClick={likeHandler} />
              <p>{data.likedIds.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
