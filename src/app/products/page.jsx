import React from "react";
import SectionTitle from "../components/common/sectionTitle";
import SectionDescrption from "../components/common/sectionDescrption";
import ProductCard from "../components/products/productCard";
import Button from "../components/common/button";
import { TbLockAccess } from "react-icons/tb";
import { PiCodeBlockBold } from "react-icons/pi";
import { MdOutlineQuickreply } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import Qualities from "../components/products/qualities";

const arrayof6Cards = [
  {
    name: "IntelliSecure Drive",
    description:
      "Redefining safety on the road with advanced driver monitoring.",
    link: "/",
    imgUrl: "/product1.jpeg",
  },
  {
    name: "SyncMatic",
    description:
      "The advanced solution that seamlessly integrates facial recognition.",
    link: "/",
    imgUrl: "/product2.png",
  },
  {
    name: "AIBAS",
    description:
      "The AI-Based Attendance System that combines QR code generation, facial recognition.",
    link: "/",
    imgUrl: "/product3.png",
  },
  {
    name: "EyeInnovate Diagnostics",
    description:
      "Explore precision diagnostics, convenient online assessments, a comprehensive information hub.",
    link: "/",
    imgUrl: "/product4.png",
  },
  {
    name: "NeuralFit",
    description:
      "Our cutting-edge technology guarantees accurate measurements.",
    link: "/",
    imgUrl: "/product5.jpg",
  },
  {
    name: "SecureSalesSync",
    description:
      "Our Mobile Phone Point of Sale Service provides a seamless web-based application.",
    link: "/",
    imgUrl: "/product6.png",
  },
];
const Page = () => {
  return (
    <section className="space-y-20">
      <div className="text-center h-full relative">
        <div className="lg:px-20 px-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 relative lg:max-w-7xl mx-auto">
            <div className="text-left h-full py-20 space-y-10 z-10">
              <SectionTitle title="Fully Integrated Products" />
              <SectionDescrption customClass={"md:w-[70%]"} />
              <Button
                text={"Let's Build"}
                customClass={"px-10 py-2 text-lg font-semibold "}
              />
            </div>
            <div className="z-10 h-full relative w-full block"></div>
          </div>
        </div>
        <div className="bg-gradient-to-tr from-bgOrange to-bgSlateLight h-full rounded-bl-[90px] absolute w-2/3 lg:w-1/2 right-0 top-0">
          <div className="absolute top-5 left-5  lg:top-40  ">
            <Qualities icon={<TbLockAccess />} title={"Secure"} />
          </div>
          <div className="absolute bottom-8 left-52 lg:left-64 ">
            <Qualities icon={<PiCodeBlockBold />} title={"Customization"} />
          </div>
          <div className="absolute top-3 right-10 lg:left-96 lg:right-auto">
            <Qualities icon={<MdOutlineQuickreply />} title={"Fast"} />
          </div>
          <div className="absolute left-40 top-40 lg:top-80 xl:top-44 lg:left-80">
            <Qualities icon={<VscWorkspaceTrusted />} title={"Trusted"} />
          </div>
        </div>
      </div>
      <div className="lg:px-20 px-10">
        <div className="lg:max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 text-white gap-5 py-20">
            {arrayof6Cards.map((item, index) => (
              <ProductCard
                key={index}
                name={item.name}
                img={item.imgUrl}
                link={item.link}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
