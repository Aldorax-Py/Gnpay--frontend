import React, { ChangeEvent, useState } from "react";
import Link from "next/link";
import "@/app/globals.css";
import styles from "@/app/register.module.css";

const VerifyEmail = () => {
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
          <h1 className="text-7xl font-bold mb-4">Unlock Your Dreams.</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, ipsam? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatibus, ipsam?
          </p>
        </div>
      </div>
      <div className="max-w-[50vw] min-w-[60vw] min-h-[95vh] p-4 mx-4 text-center flex flex-col items-center justify-center relative">
        <div className="mb-10 mt-10">
          <h1 className="text-4xl font-semibold py-2 mb-3">
            Enter Verification Code
          </h1>
          <p className="text-[#77787D]">
            Enter the 4 digit number that was sent to user@email.com
          </p>
        </div>

        <form className="flex flex-col items-center justify-center">
          <div className="flex gap-2 mb-6">
            <div className={styles.inputContainer4}>
              <input
                type="number"
                name="otpcode"
                id="firstname"
                placeholder=""
                className={`${styles["register-input"]} text-[#77787D] px-4 py-8 rounded-2xl min-w-[100px] border border-black/10`}
              />
              <label
                htmlFor="otp"
                className={styles["floating-placeholder"]}
              ></label>
            </div>
            <div className={styles.inputContainer4}>
              <input
                type="number"
                name="otpcode"
                id="lastname"
                placeholder=""
                className={`${styles["register-input"]} text-[#77787D] px-4 py-8 rounded-2xl min-w-[100px] border border-black/10`}
              />
              <label
                htmlFor="otp"
                className={styles["floating-placeholder"]}
              ></label>
            </div>
            <div className={styles.inputContainer4}>
              <input
                type="number"
                name="otpcode"
                id="email"
                placeholder=""
                className={`${styles["register-input"]} text-[#77787D] px-4 py-8 rounded-2xl min-w-[100px] border border-black/10`}
              />
              <label
                htmlFor="email"
                className={styles["floating-placeholder"]}
              ></label>
            </div>
            <div className={styles.inputContainer4}>
              <input
                type="number"
                name="otpcode"
                id="pswd"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`${styles["register-input"]} text-[#77787D] px-4 py-8 rounded-lg min-w-[100px] border border-black/10`}
              />
              <label
                htmlFor="pswd"
                className={styles["floating-placeholder"]}
              ></label>
            </div>
          </div>
          {/*  */}
          <Link
            href={"/login"}
            className="text-white font-semibold px-4 py-3 min-w-[440px] border border-white bg-[#2A63E2] rounded-full mb-6"
          >
            Submit
          </Link>
        </form>
        <p className=" mb-48 text-sm">
          Didn’t receive any code??{" "}
          <span className="text-[#2A63E2] font-semibold cursor-pointer">
            Resend
          </span>
        </p>
        <div className="flex items-center justify-between w-full absolute bottom-5 right-0">
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

export default VerifyEmail;
