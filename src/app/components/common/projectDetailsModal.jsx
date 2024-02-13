"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { FaLink } from "react-icons/fa6";
import { BsEmojiSmile } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { FaAnglesRight } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import ProjectDetailsComments from "../projectView/projectDetailsComments";
import ProjectDescription from "../projectView/projectDescription";
const ProjectDetailsModal = ({ modalIsOpen, closeModal }) => {
  // Modal Styles
  const customStyles = {
    content: {
      top: "50%",
      left: "auto",
      right: "50%",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(0%, -50%)",
    },
  };
  const [modalSection, setModalSection] = useState("comments");

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="relative h-full min-h-screen w-full py-5 md:w-2/3 lg:w-[40vw]">
          <div className="flex items-center justify-between py-2 text-gray-600">
            <div className="flex items-center gap-2">
              <button onClick={closeModal}>
                {/* <IoClose /> */}
                <FaAnglesRight />
              </button>
              <div>{/* <FaAnglesRight /> */}</div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <FaRegClock />
              </div>
              <div>
                <BsThreeDots />
              </div>
            </div>
          </div>
          <div className="pb-5 text-lg font-semibold">Project Title</div>
          <table>
            <tr>
              <td className="py-2 text-sm">Status</td>
              <td className="pl-5">
                <div className="w-fit rounded-md bg-green-50 px-2 py-1  text-xs font-semibold  text-green-400">
                  Pending
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-2 text-sm">Due Date</td>
              <td className="pl-5 text-sm">Due Date</td>
            </tr>
            <tr>
              <td className="py-2 text-sm">Assigned to</td>
              <td className="pl-5">
                <div className="flex items-center gap-1">
                  <Image
                    alt="abc"
                    src="/1.webp"
                    width={20}
                    height={20}
                    className={"aspect-square rounded-full object-cover"}
                  />
                  <div className="text-xs font-semibold">Developer Name</div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-2 text-sm">Labels</td>
              <td className="pl-5">
                <div className="w-fit rounded-md bg-purple-50 px-2 py-1  text-xs font-semibold  text-purple-400">
                  Web-App
                </div>
              </td>
            </tr>
          </table>
          <div className="flex items-center border-b">
            <div
              className={
                "cursor-pointer px-5 py-3 text-sm " +
                (modalSection === "comments"
                  ? " border-b border-black text-black"
                  : " text-gray-400")
              }
              onClick={() => setModalSection("comments")}
            >
              Comments
            </div>
            <div
              className={
                "cursor-pointer px-5 py-3 text-sm " +
                (modalSection === "description"
                  ? " border-b border-black text-black"
                  : " text-gray-400")
              }
              onClick={() => setModalSection("description")}
            >
              Description
            </div>
          </div>
          {modalSection === "comments" ? (
            <ProjectDetailsComments />
          ) : (
            <ProjectDescription />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ProjectDetailsModal;
