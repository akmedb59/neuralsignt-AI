"use client";
import React from "react";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const GraphComponent = ({ title, height, width, options, series }) => {
  return (
    <>
      <div className="mb-4 flex items-center gap-2 text-lg font-bold">
        <div className="whitespace-nowrap">{title}</div>
      </div>

      <ApexCharts
        options={options}
        series={series}
        // type="area"
        height={height}
        width={width}
      />
    </>
  );
};

export default GraphComponent;
