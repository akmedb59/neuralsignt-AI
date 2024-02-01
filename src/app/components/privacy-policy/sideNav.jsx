"use client";
import React from "react";
import { Link } from "react-scroll";

const privactContents = [
  {
    id: 1,
    title: "Introduction",
  },
  {
    id: 2,
    title: "Information We Collect",
  },
  {
    id: 3,
    title: "How we use your information",
  },
  {
    id: 4,
    title: "Data Security",
  },
  {
    id: 5,
    title: "Sharing your information",
  },
  {
    id: 6,
    title: "Your Choices and Rights",
  },
  {
    id: 7,
    title: "Updates to Privacy Policy",
  },
];
const SideNav = () => {
  return (
    <div className="text-white hidden sm:flex flex-col justify-around h-full">
      {privactContents.map((item) => (
        <Link
          to={`${item.id}`}
          spy={true}
          smooth={true}
          activeClass="active bg-bgSlate"
          key={item.id}
          
          duration={500}
          className="hover:bg-bgSlate grow flex items-center px-5 hover:cursor-pointer"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default SideNav;
