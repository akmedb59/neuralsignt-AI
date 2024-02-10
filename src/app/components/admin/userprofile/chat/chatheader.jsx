"use client";
import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { FaRegBell } from "react-icons/fa6";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { FaBoxArchive } from "react-icons/fa6";
import { AiTwotoneDelete } from "react-icons/ai";
const Chatheader = (
  {
    //   profile = "/person-image.avif",
    //   name = "Default Name",
    //   status = "Last Seen",
  },
) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="flex h-16 items-center gap-6 border-b bg-white px-4 py-4">
      <div className=" text-xl">Logo</div>
      <div className="w-full">
        {/* <div className="font-bold">Get your solution Now ⚡</div> */}
        <div className="text-xs">
          lorem ipsum a quick brown fox jump over the barrier
        </div>
      </div>
      <div className="relative flex gap-6">
        <div className="cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
          <HiDotsVertical />
        </div>

        {showMenu && (
          <div className="absolute right-0 top-full z-10 space-y-3 rounded-lg border bg-white p-5">
            <div className="flex items-center gap-3">
              <div>
                <FaRegBell />
              </div>
              <div>Unmute</div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <MdOutlineMarkUnreadChatAlt />
              </div>
              <div className="whitespace-nowrap">Mark Unread</div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <FaBoxArchive />
              </div>
              <div>Archive</div>
            </div>
            <hr />
            <div className="flex items-center gap-3 text-btpink">
              <div>
                <AiTwotoneDelete />
              </div>
              <div>Delete</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatheader;
