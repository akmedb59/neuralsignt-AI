import React from "react";
import { PiDotsThreeOutlineDuotone } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import MessageCard from "../cards/messageCard";
const MessagesSec = () => {
  return (
    <div className="rounded-xl border bg-white p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold">My Team</p>
        <div className="flex items-center gap-2">
          <IoSearchOutline />
          <PiDotsThreeOutlineDuotone />
        </div>
      </div>
      <div className="my-5 flex gap-3 border-b">
        <p className="border-b border-black p-1 text-xs text-gray-600">
          Project Message
        </p>
        <p className="p-1 text-xs text-gray-600">Direct Message</p>
      </div>
      <div className="flex flex-col gap-5">
        <MessageCard />
        <MessageCard />
        <MessageCard />
      </div>
    </div>
  );
};

export default MessagesSec;
