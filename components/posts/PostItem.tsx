import { Post } from "@prisma/client";
import Avatar from "../Avatar";
import { PostWithUser } from "@/app/types";

interface PostItemProps {
  userId: string;
  data: PostWithUser;
}

const PostItem: React.FC<PostItemProps> = ({ userId, data }) => {
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
              {
                data.user?.name
              }
            </p>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
