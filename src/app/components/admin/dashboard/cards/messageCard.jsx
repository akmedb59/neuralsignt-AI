import React from "react";
import { FaMobile } from "react-icons/fa";
const MessageCard = () => {
  return (
    <div className="flex items-center gap-2 hover:border rounded-xl overflow-hidden p-2 cursor-pointer">
      <div className="aspect-square rounded-full bg-bggrey p-3 text-xl">
        <FaMobile />
      </div>
      <div className="flex-grow">
        <p className="text-base font-semibold">Mobile App Design</p>
        <p className="text-sm text-gray-600">Design</p>
      </div>
      <div>
        <p className="text-xs text-gray-500">Just Now</p>
        <p className="ml-auto flex aspect-square w-fit items-center justify-center rounded-full bg-btgreen bg-opacity-20 px-2 text-xs">
          2
        </p>
      </div>
    </div>
  );
};

export default MessageCard;
