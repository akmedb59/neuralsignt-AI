"use client";
import React, { useState } from "react";
import Breadcrumb from "@/app/components/tasks/breadcrumb";
import TaskCard from "@/app/components/tasks/taskCard";
import { FaPlus } from "react-icons/fa6";
import AddTasksModal from "@/app/components/tasks/addTasksModal";
const Page = () => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const closeModal = () => {
    setmodalIsOpen(false);
  };
  return (
    <div className="h-full min-h-screen w-full bg-bggrey">
      <AddTasksModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <div className="mx-auto w-full px-10 py-5 lg:px-36 2xl:max-w-[1400px]">
        <Breadcrumb setmodalIsOpen={setmodalIsOpen} isAdmin={true} />
        <div className="grid grid-cols-1 gap-5 py-10 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 1 }, (_, index) => (
            <TaskCard key={index} />
          ))}

          {/* Last Card */}
          <div className="flex h-full w-full flex-col items-center justify-center gap-5 rounded-lg bg-white shadow py-10">
            <div
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-bggrey"
              onClick={() => setmodalIsOpen(true)}
            >
              <FaPlus />
            </div>
            <div>Start New Project</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
