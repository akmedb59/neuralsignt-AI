"use client";
import React, { useState } from "react";
import { IoCalendarOutline } from "react-icons/io5";
import Image from "next/image";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import ProjectCategory from "../../common/projectCategory";
import Modal from "react-modal";
import { BsThreeDots } from "react-icons/bs";

const ProjectCard = ({
  project: { type, title, dueDate, client, developers },
  id,
  openModal,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: "item",
    },
  });

  const assignedDevelopers = developers.map((developer, index) => {
    return (
      <div key={index} className="flex items-center gap-1 ">
        <Image
          alt="abc"
          src={developer.img}
          width={20}
          height={20}
          className={"aspect-square rounded-full object-cover"}
        />
        <div className="text-xs font-semibold">{developer.name}</div>
      </div>
    );
  });

  const types = type.map((typ, index) => {
    return (
      <ProjectCategory
        typ={typ}
        customClass="bg-purple-50 text-purple-400"
        key={index}
      />
    );
  });

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={
        "relative w-full cursor-default space-y-3 rounded-md border-2 bg-white p-5 " +
        (isDragging ? " opacity-50 shadow-lg" : "")
      }
    >
      <div
        className="absolute right-5 cursor-pointer "
        onClick={() => openModal(true)}
      >
        <BsThreeDots />
      </div>
      <div {...listeners} className="w-full cursor-grabbing space-y-3">
        <div className="flex items-center gap-2">{types}</div>
        <div className="mt-3 text-xl font-semibold">{title}</div>
        <div className="flex items-center gap-2 text-sm text-bgdark-grey">
          <IoCalendarOutline /> Due Date : {dueDate}
        </div>
        <div className="text-xs text-bgdark-grey">
          <span>{client.name}</span>- <span>{client.location}</span>
        </div>
        <div className="flex flex-row flex-wrap gap-2">
          {assignedDevelopers}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
