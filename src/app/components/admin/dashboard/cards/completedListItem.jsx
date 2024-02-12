"use client";
import ProjectDetailsModal from "@/app/components/common/projectDetailsModal";
import React, { useState } from "react";
import { GoPaperclip } from "react-icons/go";
import { GoDotFill } from "react-icons/go";

const CompletedListItem = ({
  title = "Project Title",
  files = 10,
  category = "Web Design",
  date = "12th May",
}) => {
  const [modalIsOpen, setModalOpen] = useState(false);
  function closeModal() {
    setModalOpen(false);
  }
  return (
    <div>
      <ProjectDetailsModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <div
        className="cursor-pointer rounded-xl bg-white p-4 shadow-md"
        onClick={() => setModalOpen(true)}
      >
        <p className="">{title}</p>
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-2 text-xs">
            <div className="flex items-center gap-2 rounded-md bg-btpurple bg-opacity-20 px-2 py-1 text-btpurple">
              <div>
                <GoPaperclip />
              </div>
              <div>{files}</div>
            </div>
            <div className="flex items-center gap-2 rounded-md bg-btgreen bg-opacity-20 px-2 py-1 text-btgreen">
              <div>
                <GoDotFill />
              </div>
              <div>{category}</div>
            </div>
            <div></div>
          </div>
          <div className="text-xs text-gray-400">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default CompletedListItem;
