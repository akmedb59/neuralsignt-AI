import TeamCategorySection from "@/app/components/admin/settings/teamCategorySection";
import React from 'react'
import { IoMdSettings } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
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
        <div className="flex items-center rounded-lg bg-bggrey py-2 px-3">
         
            <IoSearch />
          
          <input type="text" className="bg-transparent outline-none pl-3" placeholder="Search Settings"/>
        </div>
      </div>
      <div className="flex items-center gap-10 border-b text-sm font-semibold">
        <div className="py-2">Personal</div>
        <div className="border-b border-black py-2">Members</div>
      </div>
      <TeamCategorySection />
      <TeamCategorySection />
      <TeamCategorySection />
    </div>
  );
}

export default Page