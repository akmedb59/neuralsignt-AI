import React from "react";

const ValuesCard = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-bgSlate via-bgSlateLight to-bgOrange mx-5 my-16 rounded-xl shadow-2xl">
      <div className="bg-opacity-50 bg-bgSlate relative h-80 m-1 p-5 w-full">
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2  flex items-center justify-center bg-gray-100 rounded-full w-36 h-36">
          <div className="text-8xl text-bgOrange">{icon}</div>
        </div>
        <div className="text-center text-4xl font-semibold mt-24">{title}</div>
        <div className="text-center text-gray-400 mt-5">{description}</div>
      </div>
    </div>
  );
};

export default ValuesCard;
