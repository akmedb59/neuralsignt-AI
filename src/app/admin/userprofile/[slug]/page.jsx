"use client";
import React, { useState } from "react";
import Image from "next/image";
import Profile from "@/app/components/admin/userprofile/profile/profile";
import Calander from "@/app/components/admin/userprofile/calander/calander";
import Chatbox from "@/app/components/admin/userprofile/chat/chatbox";
const Page = () => {
  const [activeTab, setActiveTab] = useState("profile");
  return (
    <div className="px-5 md:px-20">
      <div className="flex items-center gap-5 py-10">
        <div>
          <Image
            src="/1.webp"
            alt="avatar"
            width={100}
            height={100}
            className="aspect-square rounded-full object-cover"
          />
        </div>
        <div>
          <div className="text-xl font-bold">John Doe</div>
          <div className="text-sm text-gray-500">example@email.com</div>
        </div>
      </div>
      <div className="flex items-center gap-10 border-b text-sm font-semibold">
        <div
          onClick={() => setActiveTab("profile")}
          className={
            "cursor-pointer py-2 " +
            (activeTab === "profile" ? "border-b border-black" : "")
          }
        >
          Profile
        </div>
        <div
          onClick={() => setActiveTab("calanderTab")}
          className={
            "cursor-pointer py-2 " +
            (activeTab === "calanderTab" ? "border-b border-black" : "")
          }
        >
          Project Info
        </div>
        <div
          onClick={() => setActiveTab("contact")}
          className={
            "cursor-pointer py-2 " +
            (activeTab === "contact" ? "border-b border-black" : "")
          }
        >
          Contact Now
        </div>
      </div>
      <div className="py-5">
        {activeTab === "profile" ? (
          <Profile />
        ) : activeTab === "calanderTab" ? (
          <Calander />
        ) : activeTab === "contact" ? (
          <Chatbox />
        ) : (
          "null"
        )}
      </div>
    </div>
  );
};

export default Page;
