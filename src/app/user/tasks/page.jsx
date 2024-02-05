"use client";
import React, { useState } from "react";
import TaskCard from "@/app/components/tasks/taskCard";
import Breadcrumb from "@/app/components/tasks/breadcrumb";
import TasksPagination from "@/app/components/tasks/tasksPagination";
const Page = () => {
  return (
    <div className="h-full min-h-screen w-full bg-bggrey">
      <div className="mx-auto w-full px-10 py-5 lg:px-36 2xl:max-w-[1400px]">
        <Breadcrumb isAdmin={false} />
      <TasksPagination  isAdmin={false} />  
      </div>
    </div>
  );
};

export default Page;
