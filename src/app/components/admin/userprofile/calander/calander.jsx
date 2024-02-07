import CalanderComponent from "./calanderComponent";
import React from "react";
import SmallCalander from "./smallCalander";
import FilterItem from "./filterItem";

const Calander = () => {
  return (
    <div className="w-full space-y-5 sm:gap-5 sm:space-y-0 md:flex">
      <div className="h-full w-full space-y-5  md:w-1/4">
        <SmallCalander />
        <div>
          <div className="py-3 font-bold capitalize">Filter by time off</div>
          <div className="flex flex-col gap-1">
            <FilterItem filter="All" color="bg-btblue text-btblue" />
            <FilterItem filter="Pending" color="bg-btgreen text-btgreen" />
            <FilterItem filter="Approved" color="bg-btpurple text-btpurple" />
            <FilterItem filter="Rejected" color="bg-btyellow text-btyellow" />
            <FilterItem filter="Pending" color="bg-btgreen text-btgreen" />
          </div>
        </div>
        <div>
          <div className="py-3 font-bold capitalize">Filter by time off</div>
          <div className="flex flex-col gap-1">
            <FilterItem filter="Designers" color="bg-btblue text-btblue" />
            <FilterItem filter="Marketers" color="bg-btgreen text-btgreen" />
            <FilterItem filter="Sales" color="bg-btpurple text-btpurple" />
            <FilterItem filter="Programmers" color="bg-btyellow text-btyellow" />
            <FilterItem filter="Consultants" color="bg-btgreen text-btgreen" />
          </div>
        </div>
      </div>
      <div className="w-full space-y-5 md:w-3/4">
        <div className="overflow-auto rounded-md border p-2">
          <div className="h-[100vh] w-[800px] sm:w-full">
            <CalanderComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calander;
