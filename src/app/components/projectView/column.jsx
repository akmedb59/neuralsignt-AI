import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Modal from "react-modal";

const Column = ({
  id,
  children,
  title,
  size,
  openModal,
}) => {
  // const addProj = () => {
  //   const tempProj = [...projects];
  //   tempProj.push(exampleP);
  //   setProjects(tempProj);
  // };

  const {
    attributes,
    setNodeRef,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: "container",
    },
  });

  // const opennModal = () => {
  //   openModal(true);
  //   console.log("open");
  // };
  return (
    <div
      {...attributes}
      ref={setNodeRef}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className="flex w-full cursor-default flex-col gap-5 rounded-lg border bg-white "
    >
      <div
        // {...listeners}
        className="m-5 flex cursor-move items-center justify-between px-2 py-4"
      >
        <div className="flex items-center gap-2">
          <div className="font-semibold">{title}</div>
          <div className="rounded bg-btpurple px-2 py-0.5 text-xs text-white">
            {size}
          </div>
        </div>
        <div className="cursor-pointer">
          {" "}
          <BsThreeDotsVertical />
        </div>
      </div>
      {/* {openButton} */}
      <div className="w-full p-5">
        <button
          onClick={() => openModal(true)}
          className="flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-btpurple bg-purple-50 py-3 text-btpurple"
        >
          <FaPlus />
        </button>
      </div>
      <div className="mx-5 mb-5">{children}</div>
    </div>
  );
};

export default Column;
