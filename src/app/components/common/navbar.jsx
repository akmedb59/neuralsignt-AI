"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "./button";
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const navLinks = [
    {
      title: "Home",
      link: "#",
    },
    {
      title: "Dashboard",
      link: "/user/dashboard",
    },
    {
      title: "Reports",
      link: "/user/reports",
    },
    {
      title: "Project Board",
      link: "/projectview",
    },
    {
      title: "Contact Us",
      link: "#",
    },
  ];

  const navLinksList = navLinks.map((item, index) => {
    return (
      <Link
        href={item.link}
        key={index}
        className="hover:bg-bggrey md:hover:bg-transparent hover:underline md:hover:text-btpurple"
      >
        {item.title}
      </Link>
    );
  });

  const [nav, setNav] = useState(false);

  return (
    <nav className="absolute top-0 z-50 w-full bg-transparent">
      <div className="mx-auto flex h-[80px] items-center justify-between px-10 py-8 lg:px-36 2xl:max-w-[1400px]">
        <div className="text-xl font-extrabold text-white">Snip Task</div>
        <div className="hidden gap-6 font-inter text-white md:flex">
          {navLinksList}
        </div>
        <Link 
        href={"/auth"}>
          <Button
            action={"/auth"}
            button="Login"
            customClass="hidden md:block max-w-32 bg-white text-black"
          />
        </Link>

        <button
          className="text-2xl text-white md:hidden"
          onClick={() => setNav(!nav)}
        >
          <IoMenu />
        </button>

        <div className={nav ? "block" : "hidden"}>
          <div className="absolute inset-0 h-screen w-screen bg-white p-5">
            <button
              onClick={() => setNav(!nav)}
              className="absolute right-10 top-10 text-2xl text-black"
            >
              <AiOutlineClose />
            </button>
            <div className="flex flex-col items-center justify-center gap-20 py-32 text-black">
              {navLinksList}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
