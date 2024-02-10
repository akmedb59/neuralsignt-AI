import React from "react";

const Chat = ({ type, message, time }) => {
  return (
    <div
      className={
        "relative w-fit max-w-[60%] mb-16 shadow-lg overflow-hidden text-white " +
        (type === "sender"
          ? "ml-auto bg-btgreen rounded-l-xl rounded-br-xl"
          : "  bg-bgdark-grey  rounded-r-xl rounded-bl-xl")
      }
    >
      <div className={"p-4 text-sm mb-1  " + (type === "receiver" ? " " : "")}>
        {message}
      </div>
      {/* <div className="absolute right-0 text-xs">{time}</div> */}
    </div>
  );
};

export default Chat;
