import React from "react";
import PercentageCard from "@/app/components/users/dashboard/percentageCard";
import ActiveAssignments from "@/app/components/users/dashboard/activeAssignments";
import CurrentAssignments from "@/app/components/users/dashboard/currentAssignments";
import DueAssignment from "@/app/components/users/dashboard/dueAssignment";
import InboxCard from "@/app/components/users/dashboard/inbox";
import WorkingHours from "@/app/components/users/dashboard/workingHours";
import ActivityGraph from "@/app/components/users/dashboard/activityGraph";

const Page = () => {
  return (
    <div className="w-full bg-gray-50 p-5 lg:p-10">
      {/* title */}
      <div className="mb-6">
        <div className="text-xl font-bold text-gray-400">
          Happy new month, <span className="text-black">John</span>
        </div>
        <div className="text-xs font-semibold text-gray-500">
          Welcome to your dashboard
        </div>
      </div>
      <div className="items-start gap-5 space-y-5 md:flex md:space-y-0">
        <div className="space-y-4 md:w-[75%]">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 h-fit ">
              <ActivityGraph />
            </div>
            <div className="col-span-1 flex flex-col gap-4">
              <div className="">
                <InboxCard />
              </div>
              <div>
                <WorkingHours />
              </div>
            </div>
          </div>
          {/* <div className="grid-cols-3 gap-4 space-y-5 sm:grid sm:space-y-0">
            <div>
              <PercentageCard achieved={30} dataType={"Pending Tasks"} />
            </div>
            <div>
              <PercentageCard achieved={70} dataType={"Completed Tasks"} />
            </div>
            <div>
              <PercentageCard achieved={85} dataType={"Approved Tasks"} />
            </div>
          </div> */}
          <div>
            <ActiveAssignments />
          </div>
          <div>
            <CurrentAssignments />
          </div>
        </div>
        <div className="space-y-4 md:w-[25%]">
          <div>
            <PercentageCard achieved={30} dataType={"Pending Tasks"} />
          </div>
          <div>
            <PercentageCard achieved={70} dataType={"Completed Tasks"} />
          </div>
          <div>
            <PercentageCard achieved={85} dataType={"Approved Tasks"} />
          </div>
          <div>
            <DueAssignment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
