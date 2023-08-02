import React, { ChangeEvent, useState } from "react";
import Link from "next/link";
import "@/app/globals.css";
import styles from "@/app/register.module.css";

const ForgotPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Calculate the password strength and assign the corresponding color
  const getPasswordStrengthColor = (password: string): string => {
    const strength = password.length;
    if (strength === 0) return "transparent";
    if (strength <= 1) return "red";
    if (strength <= 6) return "#FBBC05";
    if (strength <= 12) return "lightgreen";
    return "darkgreen";
  };

  const getPasswordStrengthLabel = (password: string): string => {
    const strength = password.length;
    if (strength == 0) return "";
    if (strength <= 1) return "Bad";
    if (strength <= 6) return "Fair";
    if (strength <= 8) return "Good";
    return "Very Good";
  };

  // Check if the password and confirm password match
  const passwordsMatch = password === confirmPassword;

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
      <div className="max-w-[50vw] min-w-[60vw] min-h-[95vh] p-4 mx-4 text-center flex flex-col items-center justify-center relative">
        <div className="mb-10 mt-10">
          <h1 className="text-4xl font-semibold py-2 mb-3">Forgot Password</h1>
          <p className="text-[#77787D] max-w-[400px]">
            Enter your email address and we will send you a code to reset your
            password.
          </p>
        </div>

        <form className="flex flex-col items-center justify-center">
          <div className="mb-6">
            <div className={styles.inputContainer5}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder=" "
                className={`${styles["register-input"]} text-[#77787D] px-4 py-3 rounded-2xl min-w-[200px] border border-black/10`}
              />
              <label htmlFor="email" className={styles["floating-placeholder"]}>
                Email
              </label>
            </div>
          </div>
          <Link
            href={"/password-verify-otp"}
            className="text-white font-semibold px-4 py-3 min-w-[420px] border border-white bg-[#2A63E2] rounded-full mb-6"
          >
            Submit
          </Link>
        </form>
        <p className=" mb-48 text-sm">
          Remember your password?{" "}
          <Link  href={"/login"} className="text-[#2A63E2] font-semibold cursor-pointer">
            Log In
          </Link>
        </p>
        <div className="flex items-center justify-between w-full absolute bottom-10 px-10">
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

export default ForgotPassword;
