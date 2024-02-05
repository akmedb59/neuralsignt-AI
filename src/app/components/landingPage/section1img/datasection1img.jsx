"use client";
// https://github.com/apexcharts/react-apexcharts/issues/240
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
import { BsThreeDots } from "react-icons/bs";
import React from "react";
import ProfitCard from "./profitCard";
import Progressbar from "./progressbar";

const Datasection1img = () => {
  const series = [
    {
      name: "Data-1",
      data: [40, 20, 18, 25, 32, 37],
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 4,
    },
    // title: {
    //     text: 'Revenue',
    //     align: 'left'
    // },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
  };

  const series1 = [
    {
      name: "Data-1",
      data: [1, 2, 3, 4, 5, 4, 3, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  ];
  const options1 = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
      colors: ["#b9d4fc"],
    },
    // title: {
    //     text: 'Revenue',
    //     align: 'left'
    // },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
  };

  return (
    <div className="mb-20 md:max-w-[500px] px-5 py-20 md:mb-0 md:px-0 md:py-0">
      <div className="relative">
        <svg
          className="-z-50"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#e4f4f3"
            d="M47.3,-61.3C57.5,-47.9,59.3,-29.3,62.4,-11.1C65.5,7.1,69.9,25,64.1,38.9C58.3,52.7,42.3,62.6,24.5,70.3C6.7,78,-12.9,83.7,-26.5,76.9C-40.2,70.2,-47.9,51.1,-54.7,34.1C-61.6,17,-67.7,2,-64.4,-10.5C-61.1,-22.9,-48.5,-32.9,-36.3,-45.9C-24,-59,-12,-75.1,3.3,-79.1C18.6,-83,37.1,-74.7,47.3,-61.3Z"
            transform="translate(100 100)"
          />
        </svg>
        <div
          id="chart"
          className="absolute -right-10 top-36 rounded-lg  bg-white px-6 py-5 shadow-lg"
        >
          <div className="mb-5 text-xl font-semibold">Revenue</div>
          <div className="flex items-center gap-6">
            <div>
              <ProfitCard
                title="Current Week"
                amount="$80,000"
                status="profit"
                css="bg-btgreen"
                percent="8"
              />
            </div>
            <div>
              <ProfitCard
                title="Previous Week"
                amount="$3,000"
                status="loss"
                css="bg-btpink"
                percent="2"
              />
            </div>
          </div>
          <div className="pt-5 xl:w-[450px]">
            <ApexCharts
              options={options}
              series={series}
              type="line"
              height={200}
            />
          </div>
        </div>
        {/* small chart */}
        <div className="absolute top-10 z-50 flex h-28 rounded-lg bg-white pr-4 text-[#6854da] shadow-lg md:right-10  md:top-20">
          <div className="relative pt-5">
            <ApexCharts
              options={options1}
              series={series1}
              type="area"
              height={100}
              width={200}
            />
            <div className=" absolute left-10 top-5">
              <div className="text font-semibold">Projection</div>
              <div className="text-xs font-light">January 4th</div>
            </div>
          </div>
          <div className="mt-16 text-2xl hidden md:block">
            <span className="text-xs">$</span>234,000
          </div>
        </div>
        {/* Deadlines Progresses */}
        <div className="absolute left-24 mt-20 w-[180px] rounded-lg bg-white p-5 shadow-lg md:top-3/4  md:mt-0">
          <div className="relative">
            <div className="absolute right-0 top-0">
              <BsThreeDots />
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <div className="pb-2 font-semibold">Deadlines</div>
              <Progressbar
                title="Server Setup"
                percentage="41"
                date={"30/01"}
              />
              <Progressbar
                title="Server Setup"
                percentage="51"
                date={"30/01"}
              />
              <Progressbar
                title="Server Setup"
                percentage="81"
                date={"30/01"}
              />
              <Progressbar
                title="Server Setup"
                percentage="51"
                date={"30/01"}
              />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-20 right-32 h-2 w-2 rounded-full bg-btpink"></div>
        <div className="absolute -bottom-24 right-20 h-1 w-1 rounded-full bg-btpink"></div>
      </div>
    </div>
  );
};

export default Datasection1img;
