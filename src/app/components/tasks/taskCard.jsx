import React from "react";
import { FaRegFolderClosed } from "react-icons/fa6";
import ProfilesArray from "../common/profilesArray";
import { profiles } from "../common/tempdata";
const TaskCard = ({ title = "Task Title" }) => {
  return (
    <div className="flex flex-col gap-5 rounded-lg bg-white p-5 shadow md:p-8">
      <div className="flex aspect-square h-10 w-10 items-center justify-center rounded-full bg-btgreen bg-opacity-20 p-2 text-btgreen">
        <FaRegFolderClosed />
      </div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="line-clamp-2 text-xs text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          velit offici
        </div>
      </div>

      <ProfilesArray
        profiles={profiles.content}
        showadd={true}
        css={"h-8 w-8 bg-btgreen text-xs"}
        lastIcon={"+9"}
      />
    </div>
  );
};

export default TaskCard;
