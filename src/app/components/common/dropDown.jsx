import React from "react";
import { IoIosArrowDown } from "react-icons/io";
const DropDown = ({
  label,
  placeholder,
  options = ["option1", "option2", "option3"],
}) => {
  return (
    <div className="w-full min-w-fit py-1">
      <label
        htmlFor="genderselect"
        className="flex justify-between text-xs font-semibold capitalize"
      >
        {label}
      </label>
      <div className="relative">
        <select
          name="genderselect"
          id=""
          className="w-full appearance-none rounded-lg border border-gray-200 px-2 py-3 pr-8 text-sm text-gray-400 outline-none"
          defaultValue={placeholder}
        >
          <option value={placeholder} disabled>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 flex items-center justify-center px-2 text-gray-400">
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default DropDown;
