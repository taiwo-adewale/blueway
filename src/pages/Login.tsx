import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../components";

const Login = () => {
  return (
    <div className="container">
      <div className="flex flex-col justify-center min-h-screen w-full max-w-[600px] mx-auto">
        <Link
          to="/"
          className="font-bold my-10 sm:my-12 inline-block hover-underline"
        >
          Go back to home
        </Link>

        <div className="login-box w-full bg-white xs:py-8 py-[50px] px-6 sm:px-[50px] flex flex-col text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Welcome back to <span className="text-primary font-primary">B</span>
            lueway
          </h3>
          <p className="text-base">Thoughts, stories and ideas.</p>

          <form className="mt-14 mb-16 flex flex-col items-center">
            <input
              type="email"
              className="py-3 px-6 w-full max-w-[300px] placeholder:text-center"
              placeholder="Enter your email address"
            />

            <div className="mt-6">
              <Button classNames="px-12 font-primary text-base xs:px-8">
                Login
              </Button>
            </div>
          </form>

          <p className="text-sm">
            Don't have an account yet?{" "}
            <Link
              to="/sign-up"
              className="font-bold font-secondary hover-underline"
            >
              Sign Up
            </Link>
          </p>
        </div>

        <div className="mt-14 mb-10 text-center">
          <p className="text-sm">
            Published with{" "}
            <a
              href="#"
              className="font-secondary font-bold text-btnPrimary transition-all duration-300 hover-underline"
            >
              React
            </a>{" "}
            &{" "}
            <a
              href="#"
              className="font-secondary font-bold text-btnPrimary transition-all duration-300 hover-underline"
            >
              Netlify
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
