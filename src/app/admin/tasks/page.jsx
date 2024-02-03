import Breadcrumb from "@/app/components/tasks/breadcrumb";
import React from "react";

const Page = () => {
  return (
    <div className="bg-bggrey">
      <div className="mx-auto w-full px-10 py-5 lg:px-36 2xl:max-w-[1400px]">
        <Breadcrumb />
      </div>
    </div>
  );
};

export default Page;
