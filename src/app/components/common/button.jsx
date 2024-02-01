import React from "react";

const Button = ({ text, customClass }) => {
  return (
    <div className="w-fit p-0.5 bg-gradient-to-tr from-bgOrange via-bgSlateLight to-bgOrange rounded-lg shadow-2xl">
      <button className={"bg-opacity-60 hover:bg-opacity-90 text-white bg-bgSlate relative rounded-md "+ customClass}>
        {text}
      </button>
    </div>
  );
};

export default Button;
