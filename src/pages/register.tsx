import React, { ChangeEvent, useState } from "react";
import Link from "next/link";
import "@/app/globals.css";
import styles from "@/app/register.module.css";

const Register = () => {
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
      <div className="max-w-[50vw] min-w-[60vw] min-h-[95vh] p-4 mx-4 text-center flex flex-col items-center justify-center">
        <div className="mb-10 mt-10">
          <h1 className="text-4xl font-semibold py-2 mb-3">
            Sign up for an account
          </h1>
          <p className="text-[#77787D]">
            Get started today by entering just a few details
          </p>
        </div>

        <form className="flex flex-col items-center justify-center">
          <div className="flex gap-2 mb-6">
            <div className={styles.inputContainer}>
              <input
                type="text"
                name="Fname"
                id="firstname"
                placeholder=" "
                className={`${styles["register-input"]} text-[#77787D] px-4 py-3 rounded-2xl min-w-[200px] border border-black/10`}
              />
              <label
                htmlFor="firstname"
                className={styles["floating-placeholder"]}
              >
                First Name
              </label>
            </div>
            <div className={styles.inputContainer}>
              <input
                type="text"
                name="Lname"
                id="lastname"
                placeholder=" "
                className={`${styles["register-input"]} text-[#77787D] px-4 py-3 rounded-2xl min-w-[200px] border border-black/10`}
              />
              <label
                htmlFor="lastname"
                className={styles["floating-placeholder"]}
              >
                Last Name
              </label>
            </div>
          </div>
          <div className="mb-6">
            <div className={styles.inputContainer1}>
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
          <div className="mb-1">
            <div className={styles.inputContainer2}>
              <input
                type="password"
                name="pswd"
                id="pswd"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`${styles["register-input"]} text-[#77787D] px-4 py-3 rounded-lg min-w-[200px] border border-black/10`}
              />
              <label htmlFor="pswd" className={styles["floating-placeholder"]}>
                Password
              </label>
              <div
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  right: "0",
                  fontSize: "12px",
                  textDecorationColor: "red",
                  color: getPasswordStrengthColor(password),
                }}
                className="font-bold"
              >
                {getPasswordStrengthLabel(password)}
              </div>
            </div>
            {/* Render the password strength bars only when the password is not empty */}
            {password && (
              <div className="flex justify-between mb-4">
                {/* Render the color bars dynamically based on password strength */}
                <div
                  style={{
                    height: "10px",
                    width: "25%",
                    backgroundColor: getPasswordStrengthColor(password),
                    borderRadius: "5px",
                    margin: "2px",
                  }}
                />
                <div
                  style={{
                    height: "10px",
                    width: "25%",
                    backgroundColor:
                      getPasswordStrengthColor(password) === "#FBBC05"
                        ? "#FBBC05"
                        : getPasswordStrengthColor(password) === "lightgreen"
                        ? "lightgreen"
                        : getPasswordStrengthColor(password) === "darkgreen"
                        ? "darkgreen"
                        : "transparent",
                    borderRadius: "5px",
                    margin: "2px",
                  }}
                />
                <div
                  style={{
                    height: "10px",
                    width: "25%",
                    backgroundColor:
                      getPasswordStrengthColor(password) === "#FBBC05"
                        ? "transparent"
                        : getPasswordStrengthColor(password) === "lightgreen"
                        ? "lightgreen"
                        : getPasswordStrengthColor(password) === "darkgreen"
                        ? "darkgreen"
                        : "transparent",
                    borderRadius: "5px",
                    margin: "2px",
                  }}
                />
                <div
                  style={{
                    height: "10px",
                    width: "25%",
                    position: "relative",
                    backgroundColor:
                      getPasswordStrengthColor(password) === "darkgreen"
                        ? "darkgreen"
                        : "transparent",
                    borderRadius: "5px",
                    margin: "2px",
                  }}
                ></div>
              </div>
            )}

            {/* Render the password confirmation text */}
            {confirmPassword && !passwordsMatch && (
              <p className="text-red-500 text-sm">Passwords do not match!</p>
            )}

            <div className={styles.inputContainer2}>
              <input
                type="password"
                name="pswd2"
                id="pswd2"
                placeholder=" "
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`${styles["register-input"]} text-[#77787D] px-4 py-3 rounded-lg min-w-[200px] border border-black/10`}
              />
              <label htmlFor="pswd2" className={styles["floating-placeholder"]}>
                Confirm Password
              </label>
            </div>
          </div>
          <p className="mb-6 text-sm">
            By creating an account, you agree to our{" "}
            <span className="text-[#2A63E2] font-semibold cursor-pointer">
              terms and conditions
            </span>
          </p>
          <Link
            href={"/verify-email"}
            className="text-white font-semibold px-4 py-3 min-w-[440px] border border-white bg-[#2A63E2] rounded-full mb-6"
          >
            Sign Up
          </Link>
        </form>
        <p className=" mb-48 text-sm">
          Already have an account?{" "}
          <Link
            href={"/login"}
            className="text-[#2A63E2] font-semibold cursor-pointer"
          >
            Log In
          </Link>
        </p>
        <div className="flex items-center justify-between w-full">
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

export default Register;
