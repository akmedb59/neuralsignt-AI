import React from "react";
import TaskCard from "@/app/components/tasks/taskCard";
import Breadcrumb from "@/app/components/tasks/breadcrumb";
const Page = () => {
  return (
    <div className="h-full min-h-screen w-full bg-bggrey">
      <div className="mx-auto w-full px-10 py-5 lg:px-36 2xl:max-w-[1400px]">
        <Breadcrumb isAdmin={false} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
          {Array.from({ length: 11 }, (_, index) => (
            <TaskCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
