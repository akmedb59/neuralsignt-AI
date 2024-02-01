import React from "react";
import { FaXTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6";

const SocialsArray = () => {
  const socialLinks = [
    {
      link: "#",
      icon: <FaFacebookF />,
    },
    {
      link: "#",
      icon: <FaXTwitter />,
    },
    {
      link: "#",
      icon: <FaInstagram />,
    },
  ];

  const socialLinksList = socialLinks.map((item, index) => {
    return (
      <div
        key={index}
        className="p-2 rounded-full bg-orange-500 text-white hover:opacity-80 cursor-pointer"
      >
        {item.icon}
      </div>
    );
  });
  return <div className="flex items-center gap-4">{socialLinksList}</div>;
};

export default SocialsArray;
