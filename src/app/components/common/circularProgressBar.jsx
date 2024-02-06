"use client";
import React, { useEffect, useState } from "react";

const CircularProgressBar = ({
  percentage,
  activeColor,
  bg = "bg-white",
  passiveColor = "bg-gray-100",
  size = 130,
  stroke = 15,
}) => {
  const activeSize = size - 2 * stroke;
  const [dynamicClasses, setDynamicClasses] = useState({
    sizeClassPassive: ` h-[${size}px] w-[${size}px] `,
    sizeClassActive: ` h-[${activeSize}px] w-[${activeSize}px] `,
    strokePadding: ` p-[${stroke}px] `,
  });
  // circular bar data
  const height_width = size;
  const radius = (height_width - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  useEffect(() => {}, []);
  return (
    <div className="my-4">
      <div
        className={
          `relative rounded-full aspect-square ` +
          dynamicClasses.strokePadding +
          dynamicClasses.sizeClassPassive +
          passiveColor
        }
      >
        <div
          className={
            dynamicClasses.sizeClassActive +
            `flex aspect-square items-center justify-center rounded-full ` +
            bg
          }
        >
          <div className="text-base font-bold">{percentage}%</div>
        </div>
        <svg
          className="absolute left-0 top-0"
          width={height_width}
          height={height_width}
        >
          <circle
            className="progress-ring__circle"
            stroke={activeColor}
            strokeWidth={`${stroke}px`}
            fill="transparent"
            r={radius}
            cx={height_width / 2}
            cy={height_width / 2}
            strokeDasharray={circumference + " " + circumference}
            strokeLinecap="round"
            strokeDashoffset={offset}
          />
        </svg>
      </div>
    </div>
  );
};

export default CircularProgressBar;
