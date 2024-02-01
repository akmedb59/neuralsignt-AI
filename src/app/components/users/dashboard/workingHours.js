import React from "react";
import { FaDownload } from "react-icons/fa";

const WorkingHours = () => {
  return (
    <div className="space-y-2 rounded-xl bg-blue-50 px-10 py-6 text-center">
      <div className="text-xs font-semibold">Your working hours this month</div>
      <div className="text-3xl font-extrabold">125h</div>
      <div className="text-xs font-light text-gray-500">From 1st Feb 2024</div>
      {/* <div className="flex items-center justify-center gap-3 rounded-xl border-2 border-blue-500 bg-transparent p-5 text-blue-500">
        <div className="text-base">
          <FaDownload />
        </div>
        <div className="text-xs">Save Report</div>
      </div> */}
    </div>
  );
};

export default WorkingHours;
