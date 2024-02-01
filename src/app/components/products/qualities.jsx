import React from 'react'

const Qualities = ({icon, title}) => {
  return (
    <div className="aspect-square rounded-xl overflow-hidden shadow-2xl">
      <div className="text-white bg-bgSlate bg-opacity-70 flex items-center justify-center flex-col h-full w-full p-4 lg:p-8 ">
        <div className="text-xl md:text-3xl xl:text-6xl">{icon}</div>
        <div className="text-xs md:text-base font-light md:font-semibold xl:text-xl">{title}</div>
      </div>
    </div>
  );
}

export default Qualities