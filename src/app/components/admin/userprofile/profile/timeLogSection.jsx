import React from "react";
import TimeLogItem from "./timeLogItem";

const TimeLogSection = () => {
  return (
    <div className="py-5">
      <div className="py-4 text-lg font-bold">Current Week Time Log</div>
      <div className="grid w-fit grid-cols-7 gap-5 sm:gap-10">
        <TimeLogItem day={"S"} />
        <TimeLogItem day={"M"} />
        <TimeLogItem day={"T"} />
        <TimeLogItem day={"W"} />
        <TimeLogItem day={"T"} />
        <TimeLogItem day={"F"} />
        <TimeLogItem day={"S"} />
      </div>
    </div>
  );
};

export default TimeLogSection;
