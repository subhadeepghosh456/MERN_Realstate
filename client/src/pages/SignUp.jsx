import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-md"
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-md"
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-md"
          id="password"
        />
        <button className="bg-slate-800 text-white p-3 rounded-md uppercase hover:opacity-95 disabled:opacity-80">
          Sign up
        </button>
      </form>
      <div className=" flex gap-4 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
