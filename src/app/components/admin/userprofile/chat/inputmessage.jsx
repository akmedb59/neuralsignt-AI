import React from "react";
import { IoMdSend } from "react-icons/io";
import { MdOutlineEmojiEmotions } from "react-icons/md";
const Inputmessage = () => {
  return (
    <div className="flex items-center justify-between p-4 gap-4 h-16 bg-white ">
      <div className="w-full flex items-center bg-gray-200 px-3 py-2 rounded-full gap-2">
        <div className="text-2xl text-themeBlue">
          <MdOutlineEmojiEmotions />
        </div>
        <input
          type="text"
          placeholder="Type a message"
          className="w-full outline-none bg-transparent"
        />
      </div>
      <div className="text-2xl text-themeBlue">
        <IoMdSend />
      </div>
    </div>
  );
};

export default Inputmessage;
