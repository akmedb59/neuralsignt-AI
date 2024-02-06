import React from "react";
import { PiDotsThreeOutlineDuotone } from "react-icons/pi";
import { GoPlusCircle } from "react-icons/go";
import TeamCard from "../cards/teamCard";
const TeamsSection = () => {
  return (
    <div className="rounded-xl border bg-bggrey p-5">
      <div className="flex items-center justify-between pb-4">
        <p className="text-sm font-bold">My Team</p>
        <div>
          <PiDotsThreeOutlineDuotone />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <TeamCard />
        <TeamCard />
        <div className="flex h-full w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed bg-white p-3">
          <div>
            <GoPlusCircle />
          </div>
          <div className="font-semibold">Add Team</div>
        </div>
      </div>
    </div>
  );
};

export default TeamsSection;
