/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignUp] = useState(true);
  const [errorMessage, setErrorMessage] =useState(null)

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validate form data

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
  };

  const toggleSignUpForm = () => {
    setIsSignUp(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="opacity-100"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_large.jpg"
          alt="bg-image"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="absolute rounded-md text-white bg-black bg-opacity-80 w-[30%] p-12 my-28 mx-auto right-0 left-0">
        <h1 className="text-3xl font-bold my-5">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            className="p-4 mt-4 w-full bg-[#131010] rounded-md focus:outline-gray-50 focus:ring-slate-100 border placeholder:text-[#8c8c8c] bg-opacity-70"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-4 w-full bg-[#131010] rounded-md focus:outline-gray-50 focus:ring-slate-100 border placeholder:text-[#8c8c8c] bg-opacity-70"
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="p-4  w-full bg-[#131010] rounded-md focus:outline-gray-50 focus:ring-slate-100 border placeholder:text-[#8c8c8c] bg-opacity-70"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-800 text-sm font-semibold mt-1 ">{errorMessage}</p>
        <button
          className="p-2 my-4 bg-[#e50914] w-full text-lg rounded-md"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-right cursor-pointer">Forgot password?</p>
        {isSignIn && (
          <p className="text-[#b1b2a8] my-8">
            New to Netflix?{" "}
            <span
              className="text-white font-semibold cursor-pointer"
              onClick={toggleSignUpForm}
            >
              Sign up now
            </span>
          </p>
        )}
        {!isSignIn && (
          <p className="text-[#b1b2a8] my-8">
            Already registered?{" "}
            <span
              className="text-white font-semibold cursor-pointer"
              onClick={toggleSignUpForm}
            >
              Sign in now
            </span>
          </p>
        )}
        <p className="mb-2 text-[#b1b2a8] text-sm font-thin">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
        <p className="mb-2 text-[#b1b2a8] text-sm font-thin">
          The information collected by Google reCAPTCHA is subject to the Google
          Privacy Policy and Terms of Service, and is used for providing,
          maintaining, and improving the reCAPTCHA service and for general
          security purposes (it is not used for personalised advertising by
          Google).
        </p>
      </form>
    </div>
  );
};

export default Login;
