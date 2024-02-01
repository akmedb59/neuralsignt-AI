import ContributerCard from "@/app/components/users/reports/contributerCard";
import ContributerCarousel from "@/app/components/users/reports/contributerCarousel";
import TimlineChart from "@/app/components/users/reports/timlineChart";
import React from "react";

const Page = () => {
  return (
    <div className="w-full bg-gray-50 p-5 lg:p-10">
      <div className="mb-6">
        <div className="text-xl font-bold text-gray-400">
          Welcome, <span className="text-black">John</span>
        </div>
        <div className="text-xs font-semibold text-gray-500">
          Get your Reports
        </div>
      </div>
      <div className="rounded-lg bg-white p-10">
        <TimlineChart />
      </div>
      <div className="mt-10 rounded-lg bg-white p-10">
        <div className="mb-4 flex items-center gap-2 text-lg font-bold">
          <div className="whitespace-nowrap">Top Contributors</div>
        </div>
        <ContributerCarousel />
      </div>
    </div>
  );
};

export default Page;
