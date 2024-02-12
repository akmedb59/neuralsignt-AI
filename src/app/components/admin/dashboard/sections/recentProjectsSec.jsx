"use client";
import React, { useState } from "react";
import ProjectCard from "../cards/projectCard";
import { PiDotsThreeOutlineDuotone } from "react-icons/pi";
import { GoPlusCircle } from "react-icons/go";
import AddProjectModal from "@/app/components/common/addProjectModal";

const RecentProjectsSec = () => {
  const [addModalIsOpen, setIsAddOpen] = useState(false);
  function closeModal() {
    setIsAddOpen(false);
  }
  return (
    <div className="rounded-xl border bg-bggrey p-5">
      <AddProjectModal modalIsOpen={addModalIsOpen} closeModal={closeModal} />
      <div className="flex items-center justify-between pb-4">
        <p className="text-sm font-bold">Recent Projects</p>
        <div>
          <PiDotsThreeOutlineDuotone />
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        <ProjectCard />
        <ProjectCard />
        <div
          onClick={() => setIsAddOpen(true)}
          className="flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-dashed bg-white p-3"
        >
          <div>
            <GoPlusCircle />
          </div>
          <div className="font-semibold">Add Project</div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjectsSec;
