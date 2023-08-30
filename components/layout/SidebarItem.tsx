"use client";

import { usePathname, useRouter } from "next/navigation";
import { IconType } from "react-icons";

interface SidebarItemProps {
  label: string;
  href: string;
  icon: IconType;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,

}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(href);
      }}
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