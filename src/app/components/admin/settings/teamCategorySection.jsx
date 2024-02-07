import React from "react";
import Button from "../../common/button";
import MembersList from "./membersList";

const TeamCategorySection = () => {
  return (
    <div className="flex flex-col items-start justify-between gap-5 py-8 border-b md:flex-row lg:gap-10">
      <div className="w-1/3 space-y-5">
        <h2 className="text-xl font-bold">Team Categories</h2>
        <p className="text-sm text-gray-500">
          Add, edit, and delete team categories for your organization. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quidem cum ab eius
          dolor nesciunt esse, dignissimos error, in eaque quasi eum ducimus
          voluptates dolorum repellendus distinctio rerum quae assumenda sint?
        </p>
        <div className="flex items-center gap-5">
          <Button
            button={"Download CSV ->"}
            customClass=" bg-bggrey text-bgdark-grey"
          />
          <Button
            button={"Invite New Member"}
            customClass=" bg-btgreen text-white"
          />
        </div>
      </div>
      <div className="w-2/3">
        <MembersList />
      </div>
    </div>
  );
};

export default TeamCategorySection;
