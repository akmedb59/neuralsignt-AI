"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const NavButton = ({ name, customClass, dropdown, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <Link
      href={dropdown?.length > 0 ? "#" : link}
      className={customClass + " relative bg-bgSlate  text-sm "}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onClick={handleHover}
    >
      <div className="text-xs xl:text-base">
        {name}

        {dropdown?.length > 0 ? (
          <IoIosArrowDown className="inline-block ml-1" />
        ) : (
          ""
        )}
      </div>
      {isHovered && dropdown?.length > 0 && (
        <div className="absolute w-full md:w-fit top-10 left-0 md:top-9 md:right-0">
          <div className="  text-white border flex flex-col border-bgSlateLight md:rounded-xl overflow-hidden ">
            {dropdown.map((item, index) => (
              <div
                key={index}
                className="z-50 bg-bgSlate relative px-5 py-4 bg-opacity-95 hover:bg-opacity-100 hover:bg-bgSlateLight cursor-pointer border-b border-bgSlateLight whitespace-nowrap"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </Link>
  );
};

export default NavButton;
