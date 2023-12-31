"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SidebarLogo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="
  rounded-full
  h-14
  w-14
  p-4
  flex
  items-center
  justify-center
  hover:bg-neutral-500/10
  cursor-pointer
  "
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className=" w-7 "
      >
        <g>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </g>
      </svg>
    </div>
  );
};

export default SidebarLogo;
