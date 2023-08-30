"use client";

import useLoginModal from "@/app/hooks/useLoginModal";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?:() => void
  auth?: boolean;
  alert?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
  auth,
  alert

}) => {
  const router = useRouter();
  const {data:session} = useSession()
  const loginModal = useLoginModal()

  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }

    if (auth && !session) {
      loginModal.onOpen();
    } else if (href) {
      router.push(href);
    }
  }, [router, href, auth, loginModal, onClick, session]);




  return (
    <div
      onClick={handleClick}
      className="flex flex-row items-center"
    >
      <div
        className="
            relative
            rounded-full 
            h-14
            w-14
            flex
            items-center
            justify-center 
            p-4
            hover:bg-slate-300 
            hover:bg-opacity-10 
            cursor-pointer 
            lg:hidden
          "
      >
        <Icon size={28}  />
      </div>
      <div
        className="
            relative
            hidden 
            lg:flex 
            items-row 
            gap-4 
            p-4 
            rounded-full 
            hover:bg-slate-300 
            hover:bg-opacity-10 
            cursor-pointer
            items-center
          "
      >
        <Icon size={24}  />
        <p
          className={`hidden lg:block text-xl`}
        >
          {label}
        </p>
      </div>
    </div>
  );
};

export default SidebarItem;
