import React from 'react'

const TimeLogItem = ({percentage, day}) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="h-24 w-1.5 rounded-full bg-btblue">
        <div className="bottom-0 h-2/3 bg-gray-200"></div>
      </div>
      <div className="font-semibold text-gray-400">{day}</div>
    </div>
  );
}

export default TimeLogItem