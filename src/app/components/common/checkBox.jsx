import React, { useState } from "react";

const CheckBox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false); // initialize state

  const handleCheckboxChange = () => {
    // function to toggle state
    setIsChecked(!isChecked);
  };
  return (
    <div className="flex items-center justify-between gap-3 py-1">
      <div className="text-sm">{label}</div>
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          value=""
          className="peer sr-only"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <div className="h-6 w-11 rounded-full bg-bgdark-grey after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-btpurple peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-blue-300  rtl:peer-checked:after:-translate-x-full"></div>
      </label>

    </div>
  );
};

export default CheckBox;
