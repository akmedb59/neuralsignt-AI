"use client";
import React, { useState } from "react";
import { GiElectric } from "react-icons/gi";
import NavButton from "./navButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    dropdown: [],
    link: "/#",
  },
  {
    name: "About Us",
    dropdown: [],
    link: "/about",
  },
  {
    name: "Products",
    dropdown: [],
    link: "/products",
  },
  {
    name: "Our Expertise",
    dropdown: [
      "Machine Learning",
      "Embaded System with Edge Computing",
      "Cloud Solution",
      "Image Processing",
    ],
    link: "#",
  },
  {
    name: "Services",
    dropdown: [
      "Security & Surveillance",
      "Driver Assistance and security",
      "Smart Healthcare",
      "Remote Sensing",
      "Smart Factory",
      "Industrial IoT",
    ],
    link: "#",
  },
  {
    name: "Contact Us",
    dropdown: [],
    link: "/contact",
  },
];
const Navbar = () => {
  const pathname = usePathname();

  const [isClicked, setIsClicked] = useState(false);

  return (
    <nav className="py-5 text-white border-b border-gray-700 lg:px-20 px-10 bg-bgSlate">
      <div className="lg:max-w-7xl mx-auto">
        <div className="flex items-center justify-between py-2 px-3 bg-bgSlateLight rounded-full lg:gap-10 xl:gap-20">
          <div className="bg-bgSlate text-orange-500 p-2 rounded-full text-2xl mr-5">
            <GiElectric />
          </div>

          <div
            onClick={() => {
              setIsClicked(!isClicked);
            }}
            className="p-2 md:hidden"
          >
            <GiHamburgerMenu />
          </div>
          <div className="hidden md:flex items-center justify-between w-full gap-2 relative z-50">
            {navLinks.map((item, index) => (
              <NavButton
                key={index}
                name={item.name}
                dropdown={item.dropdown}
                link={item.link}
                customClass={
                  item.link === pathname ||
                  (item.link === "/#" && pathname === "/")
                    ? "bg-orange-500 px-4 py-1 md:px-6 md:py-3 lg:px-8 lg:py-2 rounded-full"
                    : "px-4 py-1 md:px-6 md:py-3 lg:px-8 lg:py-2 rounded-full "
                }
              />
            ))}
          </div>

          {/* Mobile Navigation */}
        </div>
        <div
          className={
            isClicked
              ? " h-screen w-screen bg-bgSlateLight absolute inset-0 z-50 "
              : "hidden"
          }
        >
          <div
            onClick={() => {
              setIsClicked(!isClicked);
            }}
            className="p-5 md:hidden absolute right-0 top-0"
          >
            <RxCross1 />
          </div>

          <div className="flex flex-col pt-20">
            {navLinks.map((item, index) => (
              <NavButton
                key={index}
                name={item.name}
                dropdown={item.dropdown}
                link={item.link}
                customClass={
                  item.link === pathname ||
                  (item.link === "/#" && pathname === "/")
                    ? "bg-orange-500 text-center px-5 py-4"
                    : "bg-transparent rounded-none border-b border-gray-700 text-center px-5 py-4"
                }
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
