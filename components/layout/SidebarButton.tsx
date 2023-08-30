"use client";

import { FaFeather } from "react-icons/fa";

const SidebarButton = () => {
  return (
    <div onClick={() => {}}>
      <div className=" mt-6 p-4 h-14 w-14 lg:hidden rounded-full flex items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer">
        <FaFeather size={24} color="white"  />
      </div>
      <div className=" mt-6 hidden lg:block px-4 py-2 rounded-full bg-sky-500 hover:bg-opacity-90 cursor-pointer">
        <p className=" hidden lg:block text-center font-semibold text-white text-[20px]">Post</p>

      </div>
    </div>
  );
};

export default SidebarButton;
