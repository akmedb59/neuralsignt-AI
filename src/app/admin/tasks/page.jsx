"use client";
import React, { useState } from "react";
import Breadcrumb from "@/app/components/tasks/breadcrumb";
import AddTasksModal from "@/app/components/tasks/addTasksModal";
import TasksPagination from "@/app/components/tasks/tasksPagination";
const Page = () => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const closeModal = () => {
    setmodalIsOpen(false);
  };
  const [filter, setFilter] = useState("all");
  return (
    <div className="h-full min-h-screen w-full bg-bggrey">
      <AddTasksModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <div className="mx-auto w-full px-10 py-5 lg:px-36 2xl:max-w-[1400px]">
        <Breadcrumb
          setmodalIsOpen={setmodalIsOpen}
          isAdmin={true}
          setFilter={setFilter}
        />
        <TasksPagination setmodalIsOpen={setmodalIsOpen} isAdmin={true} />
      </div>
    </div>
  );
};

export default Page;
