import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const StatusCard = ({ title, tasks, allign, customClass, icon }) => {
  return (
    <div
      className={
        "p-5 flex h-full flex-col justify-between rounded-xl " + customClass
      }
    >
      <div
        className={
          "w-fit text-3xl" +
          (allign === "right" ? " ml-auto " : " mr-auto ")
        }
      >
        {icon}
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <div className="flex items-center justify-between font-light">
          <p className="text-sm">{`${tasks} Tasks`}</p>
          <div className="text-xs">
            <FaArrowRightLong />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
