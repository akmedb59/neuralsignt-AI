import React from "react";
import StatusCard from "./statusCard";

const StatusSection = () => {
  return (
    <div className="grid grid-cols-2 gap-4 py-3 md:grid-cols-4">
      <StatusCard title="Total Projects" data="230" />
      <StatusCard />
      <StatusCard />
      <StatusCard />
    </div>
  );
};

export default StatusSection;
