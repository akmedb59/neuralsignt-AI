import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import ProfilesArray from "@/app/components/common/profilesArray";
import { profiles } from "@/app/components/common/tempdata";
import { GoPaperclip } from "react-icons/go";
import { FaRegClock } from "react-icons/fa6";

const ProjectCard = () => {
  return (
    <div className="space-y-3 rounded-xl bg-white p-5 shadow-md">
      <div className="flex items-center justify-between ">
        <p className="text-sm font-bold">Project Title</p>
        <div>
          <BsThreeDotsVertical />
        </div>
      </div>
      <p className="text-xs font-light text-gray-400">Team Name</p>
      <div className="flex items-center gap-2 text-xs pb-5">
        <div className="flex items-center gap-2 rounded-md bg-btpurple bg-opacity-20 px-2 py-1 text-btpurple">
          <div>
            <GoPaperclip />
          </div>
          <div>03</div>
        </div>
        <div className="flex items-center gap-2 rounded-md bg-btpink bg-opacity-20 px-2 py-1 text-btpink">
          <div>
            <FaRegClock />
          </div>
          <div>5 Days Left</div>
        </div>
        <div></div>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-1 w-full overflow-hidden rounded-full bg-gray-200">
          <div className="h-full w-2/3 bg-btgreen"></div>
        </div>
        <div className="text-xs font-light text-gray-400">66%</div>
      </div>

      <ProfilesArray
        profiles={profiles.content}
        showadd={true}
        css={"h-8 w-8 bg-btpurple text-xs"}
        lastIcon={"+9"}
      />
    </div>
  );
};

export default ProjectCard;
