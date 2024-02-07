import React from "react";
import InfoCard from "./infoCard";

const InfoSection = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-4 py-3">
      <InfoCard title="Total Projects" data="230" color="border-btgreen" />
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
    </div>
  );
};

export default InfoSection;
