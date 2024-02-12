"use client";
import CategoriesList from "@/app/components/admin/settings/members/categoriesList";
import MemberSettings from "@/app/components/admin/settings/profileEdit/memberSettings";
import Searchbox from "@/app/components/common/searchbox";
import React, { useState } from "react";
import { IoMdSettings } from "react-icons/io";

const Page = () => {
  const [activeTab, setActiveTab] = useState("personal");

 
  return (
    <div className="px-20 bg-bggrey">
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-btpurple p-1.5 text-2xl text-white">
            <IoMdSettings />
          </div>
          <div className="text-xl font-bold text-btpurple">Settings</div>
        </div>
        {/* <Searchbox placeholder="Search settings" /> */}
      </div>
      <div className="flex items-center gap-10 border-b text-sm font-semibold">
        <div
          className={
            "cursor-pointer py-2 " +
            (activeTab === "personal" ? " border-b border-black " : "")
          }
          onClick={() => setActiveTab("personal")}
        >
          Personal
        </div>
        <div
          className={
            "cursor-pointer py-2 " +
            (activeTab === "members" ? " border-b border-black " : "")
          }
          onClick={() => setActiveTab("members")}
        >
          Members
        </div>
      </div>
      {activeTab === "personal" ? <MemberSettings /> : <CategoriesList />}
    </div>
  );
};

export default Page;
