import CircularProgressBar from "@/app/components/common/circularProgressBar";
import React from "react";
import { PiDotsThreeOutlineDuotone } from "react-icons/pi";
const ProgressCard = () => {
  return (
    <div className="h-full rounded-xl bg-btpurple p-5">
      <div className="flex items-center justify-between text-white">
        <p>Overall Progress</p>
        <div>
          <PiDotsThreeOutlineDuotone />
        </div>
      </div>
      <div className="flex h-full items-center justify-center">
        <CircularProgressBar
          percentage={75}
          activeColor={"yellow"}
          passiveColor={"bg-gray-600"}
          bg={"bg-btpurple text-white"}
          size={150}
        />
      </div>
    </div>
  );
};

export default ProgressCard;
