import React from "react";
import Intro from "../components/authPage/intro";
import AuthForm from "../components/authPage/authForm";

const Page = () => {
  return (
    <div className="-z-50 bg-[#f6f4ff]">
      <div className="mx-auto h-svh max-h-svh w-full grid-cols-3 items-center gap-10 p-3 md:grid md:p-5 lg:p-10 2xl:max-w-[1400px]">
        <div className="col-span-2  h-full">
          <Intro />
        </div>
        <div className="col-span-1 overflow-auto px-5">
          <AuthForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
