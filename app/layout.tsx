import Sidebar from "@/components/layout/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FollowBar from "@/components/layout/FollowBar";

import AuthContext from "./context/AuthContext";
import { ToastProvider } from "./context/ToasterContext";
import RegisterModal from "@/components/modals/RegisterModal";
import LoginModal from "@/components/modals/LoginModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "X",
  description: "X",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` h-screen bg-white ${inter.className}`}>
        <AuthContext>
          <ToastProvider />
          <RegisterModal />
          <LoginModal />
          <div className=" container h-full mx-auto xl:px-30 max-w-6xl">
            <div className=" grid grid-cols-4 h-full">
              <Sidebar />
              <div className=" col-span-3 lg:col-span-2 border-x-[1px] border-neutral-100">
                {children}
              </div>
              <FollowBar />
            </div>
          </div>
        </AuthContext>
      </body>
    </html>
  );
}
