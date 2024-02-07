import React from "react";
import { TiTick } from "react-icons/ti";
const FilterItem = ({
  filter,
  color = "bg-btpink text-btpink",
  icon = <TiTick />,
}) => {
  return (
    <div className="flex cursor-pointer items-center gap-2">
      <div
        className={
          "aspect-square rounded-md bg-opacity-20 p-1 text-sm " + color
        }
      >
        {icon}
      </div>
      <div className="text-sm font-semibold">{filter}</div>
    </div>
  );
};

export default FilterItem;
