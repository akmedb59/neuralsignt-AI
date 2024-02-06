import React from 'react'
import ProjectCard from '../cards/projectCard';
import { PiDotsThreeOutlineDuotone } from "react-icons/pi";
import { GoPlusCircle } from "react-icons/go";

const RecentProjectsSec = () => {
  return (
    <div className="rounded-xl border bg-bggrey p-5">
      <div className="flex items-center justify-between pb-4">
        <p className="text-sm font-bold">Recent Projects</p>
        <div>
          <PiDotsThreeOutlineDuotone />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-3">
        <ProjectCard />
        <ProjectCard />
        <div className="flex h-full w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed bg-white p-3">
          <div>
            <GoPlusCircle />
          </div>
          <div className="font-semibold">Add Project</div>
        </div>
      </div>
    </div>
  );
}

export default RecentProjectsSec