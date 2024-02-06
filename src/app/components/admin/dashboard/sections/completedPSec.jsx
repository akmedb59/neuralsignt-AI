import React from "react";
import { PiDotsThreeOutlineDuotone } from "react-icons/pi";
import CompletedListItem from "../cards/completedListItem";

const CompletedPSec = () => {
  return (
    <div className="h-full rounded-xl border bg-btgreen bg-opacity-20 p-5">
      <div className="flex items-center justify-between pb-4">
        <p className="text-sm font-bold">Completed Projects</p>
        <div>
          <PiDotsThreeOutlineDuotone />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <CompletedListItem />
        <CompletedListItem />
        <CompletedListItem />
      </div>
    </div>
  );
};

export default CompletedPSec;
