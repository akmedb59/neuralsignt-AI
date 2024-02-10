import React from "react";
import { IoIosArrowDown } from "react-icons/io";
const DropDown = ({
  label,
  placeholder,
  options = ["option1", "option2", "option3"],
}) => {
  return (
    <div className="relative w-full py-1">
      <label
        htmlFor="genderselect"
        className="flex justify-between text-xs font-semibold capitalize"
      >
        {label}
      </label>
      <select
        name="genderselect"
        id=""
        className="w-full appearance-none rounded-lg border border-gray-200 px-2 py-3 text-sm text-gray-400 outline-none"
      >
        <option value="" selected>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-1/2 right-0 px-2 text-gray-400">
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default DropDown;
