import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { FaPaperclip } from "react-icons/fa6";
import Image from "next/image";

const UserDetailCard = ({
  status = <FaPaperclip />,
  img = "/1.webp",
  name = "John Doe",
  post = "Web Developer",
  number = 3526484645345,
  email = "example@email.com",
}) => {
  return (
    <div className="cursor-pointer rounded-lg bg-btpurple bg-opacity-10 p-2 hover:bg-opacity-5">
      <div className="flex items-center justify-between text-xs text-btpurple">
        <div className="rounded bg-white p-1 ">{status}</div>
        <div>
          <HiDotsVertical />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 p-5 ">
        <Image
          src={img}
          width={100}
          height={100}
          alt="user"
          className="aspect-square rounded-full object-cover"
        />
        <div className="font-bold">{name}</div>
        <div className="rounded-full bg-btpurple bg-opacity-15 px-3 py-1 text-xs font-semibold text-btpurple">
          {post}
        </div>
        <div className="text-sm font-semibold text-bgdark-grey">{number}</div>
        <div className="text-sm font-bold text-btpurple">{email}</div>
      </div>
    </div>
  );
};

export default UserDetailCard;
