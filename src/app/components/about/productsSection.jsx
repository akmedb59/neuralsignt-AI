import React from "react";
import SectionTitle from "../common/sectionTitle";
import SectionDescrption from "../common/sectionDescrption";
import Card from "../landing/featuresSec/card";
import { LuCircuitBoard } from "react-icons/lu";
import { GiCircuitry } from "react-icons/gi";
import { SiCircuitverse } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
const arrayof6Cards = [
  {
    title: "Smart Factory",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptas.",
    imgUrl: <SiCircuitverse />,
  },
  {
    title: "Industrial IoT",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptas.",
    imgUrl: <GiCircuitry />,
  },
  {
    title: "Smart Healthcare",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptas.",
    imgUrl: <LuCircuitBoard />,
  },
  {
    title: "Driver Assistance and security",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptas.",
    imgUrl: <AiFillApi />,
  },
  {
    title: "Security & Surveillance",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptas.",
    imgUrl: <LuCircuitBoard />,
  },
  {
    title: "Remote Sensing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptas.",
    imgUrl: <GiCircuitry />,
  },
];
const ProductsSection = () => {
  return (
    <section className="space-y-20 py-20">
      <div className="text-center space-y-10">
        <SectionTitle title="Fully Integrated Products" />
        <SectionDescrption customClass={"md:w-[50%] mx-auto"} />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 text-white">
        {arrayof6Cards.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            icon={item.imgUrl}
            iconbg={"bg-bgOrange"}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
