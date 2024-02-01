import React from 'react'
import Chatprofile from './chatprofile'
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";

const InboxCard = () => {
    return (
      <div className="w-full grow overflow-hidden rounded-lg border bg-white">
        <div className="border-b bg-btgreen p-4 text-center text-base font-semibold text-white">
          Team Members
        </div>
        <div className="space-y-2 px-2 py-2">
          <Chatprofile unreadNo={10} />
          <Chatprofile unreadNo={1} />
          <Chatprofile unreadNo={0} />
        </div>
      </div>
    );
}

export default InboxCard;