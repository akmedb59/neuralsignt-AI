import React from "react";

const InfoCard = ({
  title = "Title",
  data = "2435",
  color = "border-btpink",
}) => {
  return (
    <div className={"border-l-4  pl-3 "+color}>
      <p className="font-bold">{data}</p>
      <p className="text-sm text-gray-500">{title}</p>
    </div>
  );
};

export default InfoCard;
