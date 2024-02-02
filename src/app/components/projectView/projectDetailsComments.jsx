import React from "react";
import { FaLink } from "react-icons/fa6";
import { BsEmojiSmile } from "react-icons/bs";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";

const ProjectDetailsComments = () => {
  return (
    <div>
      <div className="relative my-5 h-28 w-full rounded-lg bg-gray-100">
        <textarea
          className="h-full w-full resize-none overflow-hidden bg-transparent p-3 outline-none"
          placeholder="Add a comment"
        />
        <div className="absolute bottom-2 right-2 flex items-center gap-2 ">
          <div className="text-gray-500">
            <FaLink />
          </div>
          <div className="text-gray-500">
            <BsEmojiSmile />
          </div>
          <button className="rounded-lg bg-btblue px-3 py-1 text-sm text-white">
            Submit
          </button>
        </div>
      </div>
      <div className="border-b px-2 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Image
              alt="abc"
              src="/1.webp"
              width={20}
              height={20}
              className={"aspect-square rounded-full object-cover"}
            />
            <div className="text-sm font-semibold">Alaxender Wright</div>
            <div className="text-xs text-gray-400 ">12 min ago</div>
          </div>
          <div>
            <BsThreeDots />
          </div>
        </div>
        <p className="py-2 text-sm font-light text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi at
          cumque sequi possimus tempore ducimus sint expedita, pariatur, error
          neque laudantium repudiandae? Impedit voluptatem in laboriosam quae
          quos perferendis quis!
        </p>
        <div className="flex items-center gap-2">
          <div className="text-gray-500">
            <BsEmojiSmile />
          </div>
          <div className="text-sm font-semibold text-gray-500">Reply</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsComments;
