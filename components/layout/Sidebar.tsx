"use client";

import { usePathname } from "next/navigation";
import SidebarLogo from "./SidebarLogo";

import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

import SidebarItem from "./SidebarItem";
import SidebarButton from "./SidebarButton";
import { signOut, useSession } from "next-auth/react";

const Sidebar = () => {
  const { data: session } = useSession();

  const pathname = usePathname();
  const items = [
    {
      icon: BsHouseFill,
      label: "Home",
      href: "/",
      active: pathname === "/",
    },
    {
      icon: BsBellFill,
      label: "Notifications",
      href: "/notifications",
      active: pathname === "/notifications",
    },
    {
      icon: FaUser,
      label: "Profile",
      href: `/users/123`,
      active: pathname === "/users/123",
    },
  ];

  return (
    <div className=" col-span-1 h-full pr-4 md:pr-6">
      <div className=" flex flex-col items-end">
        <div className=" space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              label={item.label}
              href={item.href}
              icon={item.icon}
            />
          ))}
          {session && (
            <SidebarItem
              label="Logout"
              icon={BiLogOut}
              onClick={() => signOut()}
            />
          )}
          <SidebarButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
