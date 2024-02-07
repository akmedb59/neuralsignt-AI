import React from "react";
import { RiUserSearchFill } from "react-icons/ri";
const StatusCard = ({
  title = "Title",
  data = 113214,
  icon = <RiUserSearchFill />,
  color = "bg-btyellow text-btyellow",
}) => {
  return (
    <div className="flex flex-col justify-between gap-10 rounded-lg bg-bggrey p-5 shadow">
      <div className={"w-fit rounded-full bg-opacity-20 p-2 " + color}>
        {icon}
      </div>
      <div>
        <p className="font-bold">{data}</p>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  );
};

export default StatusCard;
