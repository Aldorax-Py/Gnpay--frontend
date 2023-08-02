import React, { ChangeEvent, useState } from "react";
import Link from "next/link";
import "@/app/globals.css";
import styles from "@/app/register.module.css";

const PasswordChangeSuccess = () => {
  return (
    <main className="md:max-w-screen md:max-h-screen bg-white flex p-6 overflow-x-hidden">
      <div className="max-w-[50vw] min-w-[35vw] min-h-[95vh] bg-[#2A63E2] rounded-lg relative flex flex-col items-start justify-center">
        <div className="absolute top-10 left-10">
          <h1>Gnpay Africa Logo</h1>
        </div>
        <div className="mx-12 text-white">
          <h1 className="text-5xl font-bold mb-4">Unlock Your Dreams</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur. Etiam quam turpis ut eu.
            Lectus quis eget viverra leo amet. Lorem ipsum dolor sit amet
            consectetur. Etiam quam turpis ut eu.{" "}
          </p>
        </div>
      </div>
      <div className="max-w-[50vw] min-w-[60vw] min-h-[95vh] py-4 mx-10 text-center flex flex-col items-center justify-center relative">
        <div className="mb-10 mt-10 absolute top-64">
          <h1 className="text-4xl font-semibold py-2 mb-3">Success</h1>
          <p className="text-[#77787D] max-w-[400px]">
            Your password has been changed successfully
          </p>
        </div>

        <form className="flex flex-col items-center justify-center">
          <Link
            href={"/login"}
            className="text-white font-semibold px-4 py-3 min-w-[440px] border border-white bg-[#2A63E2] rounded-full mb-6"
          >
            Log In
          </Link>
        </form>
        <div className="flex items-center justify-between w-full absolute bottom-10">
          <div className="text-sm">
            View our{" "}
            <span className="underline cursor-pointer">
              GDPR & Privacy Policies{" "}
            </span>
          </div>
          <div className="text-[#77787D] text-sm">Copyright 2023</div>
        </div>
      </div>
    </main>
  );
};

export default PasswordChangeSuccess;
