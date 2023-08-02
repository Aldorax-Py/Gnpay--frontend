import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import image from "@/app/favicon.ico";

const LeftSide = () => {
  const router = useRouter();

  return (
    <div className="min-w-[320px] max-w-[320px] bg-[#000] p-5 items-center flex flex-col text-center fixed h-screen">
      <div className="flex flex-col w-full">
        <div className=" mb-20">
          <Image
            src={image}
            alt="dk"
            className="mx-auto"
            width={30}
            height={30}
          />
        </div>
        {/*  */}
        <div className="w-full self-start flex px-2">
          <Link
            className={`py-4 px-12 ${
              router.pathname === "/user/dashboard"
                ? "bg-[#2A63E2] font-bold  text-white"
                : "bg-transparent font-bold text-[#fff]"
            } my-1 rounded-xl text-left w-full`}
            href="/dashboard"
          >
            Home
          </Link>
        </div>
        <div className="w-full self-start flex px-2">
          <Link
            className={`py-4 px-12 ${
              router.pathname === "/name"
                ? "bg-[#2A63E2] font-bold text-white"
                : "bg-transparent font-bold text-[#fff]"
            } my-1 rounded-xl text-left w-full`}
            href="/name"
          >
            My Wallet
          </Link>
        </div>
        <div className="w-full self-start flex px-2">
          <Link
            className={`py-4 px-12 ${
              router.pathname === "/name"
                ? "bg-[#2A63E2] font-bold"
                : "bg-transparent font-bold text-[#fff]"
            } my-1 rounded-xl text-left w-full`}
            href="/name"
          >
            Transactions
          </Link>
        </div>
        <div className="w-full self-start flex px-2">
          <Link
            className={`py-4 px-12 ${
              router.pathname === "/name"
                ? "bg-[#2A63E2] font-bold"
                : "bg-transparent font-bold text-[#fff]"
            } my-1 rounded-xl text-left w-full`}
            href="/name"
          >
            Financing
          </Link>
        </div>

        <div className="w-full border border-t border-solid border-gray-200/20 my-5"></div>

        <div className="w-full self-start flex px-2">
          <Link
            className={`py-4 px-12 ${
              router.pathname === "/name"
                ? "bg-[#2A63E2] font-bold"
                : "bg-transparent font-bold text-[#fff]"
            } my-1 rounded-xl text-left w-full`}
            href="/name"
          >
            Security
          </Link>
        </div>
        <div className="w-full self-start flex px-2">
          <Link
            className={`py-4 px-12 ${
              router.pathname === "/name"
                ? "bg-[#2A63E2] font-bold"
                : "bg-transparent font-bold text-[#fff]"
            } my-1 rounded-xl text-left w-full`}
            href="/name"
          >
            Support
          </Link>
        </div>
        <div className="w-full self-start flex px-2">
          <Link
            className={`py-4 px-12 ${
              router.pathname === "/name"
                ? "bg-[#2A63E2] font-bold"
                : "bg-transparent font-bold text-[#fff]"
            } my-1 rounded-xl text-left w-full`}
            href="/name"
          >
            Dark Mode
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
