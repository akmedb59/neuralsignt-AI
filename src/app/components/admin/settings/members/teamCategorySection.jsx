"use client";
import React, { useState } from "react";
import Button from "../../../common/button";
import MembersList from "./membersList";
import { CSVLink } from "react-csv";
import AddDeveloperModal from "@/app/components/common/addDeveloperModal";

const TeamCategorySection = () => {
  const csvData = [
    ["firstname", "lastname", "email"],
    ["Ahmed", "Tomi", "ah@smthing.co.com"],
    ["Raed", "Labes", "rl@smthing.co.com"],
    ["Yezzi", "Min l3b", "ymin@cocococo.com"],
  ];

  const [addModalIsOpen, setIsAddOpen] = useState(false);
  function closeModal() {
    setIsAddOpen(false);
  }
  return (
    <div className="flex flex-col items-start justify-between gap-5 border-b py-8 md:flex-row lg:gap-10">
      <AddDeveloperModal modalIsOpen={addModalIsOpen} closeModal={closeModal} />
      <div className="w-1/3 space-y-5">
        <h2 className="text-xl font-bold">Team Categories</h2>
        <p className="text-sm text-gray-500">
          Add, edit, and delete team categories for your organization. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quidem cum ab eius
          dolor nesciunt esse, dignissimos error, in eaque quasi eum ducimus
          voluptates dolorum repellendus distinctio rerum quae assumenda sint?
        </p>
        <div className="flex items-center gap-5">
          <CSVLink
            data={csvData}
            className="cursor-pointer whitespace-nowrap rounded-full bg-btgreen px-5 py-3 text-center  text-sm font-semibold text-white hover:bg-opacity-90"
          >
            Download CSV
          </CSVLink>
          <div onClick={() => setIsAddOpen(true)}>
            <Button
              button={"Invite New Member"}
              customClass=" bg-btgreen text-white"
            />
          </div>
        </div>
      </div>
      <div className="w-2/3">
        <MembersList />
      </div>
    </div>
  );
};

export default TeamCategorySection;
