import React from "react";
import GraphComponent from "../../common/graphComponent";
const ActivityGraph = () => {
  const series = [
    {
      name: "Tickets Resolved",
      data: [4, 15, 11, 25, 19],
    },
  ];
  const options = {
    chart: {
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
      width: 2,
    },
    markers: {
      size: 5,
      hover: {
        size: 9,
      },
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
          show: true,
        },
      },
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    },
  };
  return (
    <div className="h-fit rounded-lg border bg-white p-5">
      <GraphComponent
        title={"Current Week Activity"}
        series={series}
        options={options}
        height={300}
        width={"100%"}
      />
    </div>
  );
};

export default ActivityGraph;
