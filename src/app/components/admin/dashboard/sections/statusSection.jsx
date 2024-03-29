import React from "react";
import StatusCard from "../cards/statusCard";
import { RiSettings6Line } from "react-icons/ri";
import PercentageCard from "@/app/components/users/dashboard/percentageCard";
import ProgressCard from "../cards/progressCard";

const StatusSection = () => {
  return (
    <div className="">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-rows-12 gap-4">
            <div className="row-span-7">
              <StatusCard
                title={"Ongoing"}
                tasks={11}
                allign={"right"}
                customClass={"bg-btgreen text-white"}
                icon={<RiSettings6Line />}
              />
            </div>
            <div className="row-span-5">
              <StatusCard
                title={"Ongoing"}
                tasks={11}
                allign={"left"}
                customClass={"bg-btpink text-white"}
                icon={<RiSettings6Line />}
              />
            </div>
          </div>
          <div className="grid grid-rows-12 gap-4">
            <div className="row-span-5">
              <StatusCard
                title={"Ongoing"}
                tasks={11}
                allign={"left"}
                customClass={"bg-btyellow text-white"}
                icon={<RiSettings6Line />}
              />
            </div>
            <div className="row-span-7">
              <StatusCard
                title={"Ongoing"}
                tasks={11}
                allign={"left"}
                customClass={"bg-btblue text-white"}
                icon={<RiSettings6Line />}
              />
            </div>
          </div>
        </div>
        <div>
          <ProgressCard />
        </div>
      </div>
    </div>
  );
};

export default StatusSection;
