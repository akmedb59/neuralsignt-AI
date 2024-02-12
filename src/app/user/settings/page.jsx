import MemberSettings from "@/app/components/admin/settings/profileEdit/memberSettings";
import Searchbox from "@/app/components/common/searchbox";
import React from "react";
import { IoMdSettings } from "react-icons/io";

const Page = () => {


  return (
    <div className="px-20">
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-btpurple p-1.5 text-2xl text-white">
            <IoMdSettings />
          </div>
          <div className="text-xl font-bold text-btpurple">Settings</div>
        </div>
        <Searchbox placeholder="Search settings" />
      </div>
      <div className="flex items-center gap-10 border-b text-sm font-semibold">
        <div className={"cursor-pointer border-b border-black py-2"}>
          Personal
        </div>
      </div>
      <MemberSettings />
    </div>
  );
};

export default Page;
