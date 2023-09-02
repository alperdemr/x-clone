import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

import { Post, User } from "@prisma/client";

import useLoginModal from "./useLoginModal";

interface Props {
  postId: Post;
  currentUser?: User | null
}

const useFavorite = ({ postId, currentUser }: Props) => {
  const router = useRouter();

  const loginModal = useLoginModal();

  const hasFavorited = useMemo(() => {
    const post = postId?.likedIds || [];

    return post.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (!currentUser) {
      return loginModal.onOpen();
    }

    try {
      let request;

      if (hasFavorited) {
        request = () => axios.delete(`/api/favorites/${listingId}`);
      } else {
        request = () => axios.post(`/api/favorites/${listingId}`);
      }

      await request();
      router.refresh();
      toast.success('Success');
    } catch (error) {
      toast.error('Something went wrong.');
    }
  }, 
  [
    currentUser, 
    hasFavorited, 
    listingId, 
    loginModal,
    router
  ]);

  return {
    hasFavorited,
    toggleFavorite,
  }
}

export default useFavorite;