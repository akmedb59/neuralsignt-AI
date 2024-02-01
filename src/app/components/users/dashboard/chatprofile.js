import React from "react";
import Image from "next/image";
import { HiDotsHorizontal } from "react-icons/hi";

const Chatprofile = ({
  profile = "/1.webp",
  name = "Default Name",
  lastScene = "Front-End Dev",
  //   recentMsg = "Default Message",
  unreadNo = null,
}) => {
  return (
    <div className={"flex w-full gap-4 rounded-lg border p-2 shadow-md"}>
      <div className="">
        <Image
          src={profile}
          width={50}
          height={50}
          className="aspect-square rounded-full object-cover"
          alt="ProfileImg"
        />
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <div className={"font-bold"}>{name}</div>

          <div className="text-xs">
            <HiDotsHorizontal />
          </div>
        </div>
        <div className="text-xs">{lastScene}</div>
        

        {/* <div className="py-4">
          <hr />
        </div> */}
      </div>
    </div>
  );
};

export default Chatprofile;
