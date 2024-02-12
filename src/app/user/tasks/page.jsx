"use client";
import React, { useState } from "react";
import Breadcrumb from "@/app/components/tasks/breadcrumb";
import TasksPagination from "@/app/components/tasks/tasksPagination";
const Page = () => {
  const [filter, setFilter] = useState("all");
  return (
    <div className="h-full min-h-screen w-full bg-bggrey">
      <div className="mx-auto w-full px-10 py-5 lg:px-36 2xl:max-w-[1400px]">
        <Breadcrumb isAdmin={false} setFilter={setFilter} />
        <TasksPagination isAdmin={false} filter={filter} />
      </div>
    </div>
  );
};

export default Page;
