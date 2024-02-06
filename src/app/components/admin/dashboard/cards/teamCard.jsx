import React from "react";
import { PiLightningABold } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";
import ProfilesArray from "@/app/components/common/profilesArray";
import { profiles } from "@/app/components/common/tempdata";
const TeamCard = () => {
  return (
    <div className="rounded-xl bg-white p-5 shadow-md space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-2">
          <div className="rounded-xl border-2 p-2">
            <PiLightningABold />
          </div>
          <p className="text-sm font-semibold">Team Name</p>
        </div>
        <div>
          <BsThreeDotsVertical />
        </div>
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

export default TeamCard;
