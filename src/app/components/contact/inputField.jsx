import React from "react";
import "../../styles/customCss.css";
const InputField = ({ placeholder, name }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-white capitalize font-semibold pb-1 block text-left"
      >
        {name}
      </label>
      <input
        type="email"
        name=""
        id=""
        className="border-bgGray rounded-lg placeholder:text-sm w-full px-5 py-3 border outline-none focus:outline-none bg-bgSlateLight active:bg-bgSlateLight text-white"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
