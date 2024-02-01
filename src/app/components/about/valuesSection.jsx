import React from "react";
import SectionTitle from "../common/sectionTitle";
import SectionDescrption from "../common/sectionDescrption";
import ValuesCard from "./valuesCard";
import { TbDeviceVisionPro } from "react-icons/tb";
import { GoGoal } from "react-icons/go";
import { IoDiamondOutline } from "react-icons/io5";

const arrayof6Cards = [
  {
    title: "Mission",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptas.",
    imgUrl: <GoGoal />,
  },
  {
    title: "Vision",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptas.",
    imgUrl: <TbDeviceVisionPro />,
  },
  {
    title: "Values",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptas.",
    imgUrl: <IoDiamondOutline />,
  },
];
const ValuesSection = () => {
  return (
    <section className="space-y-20 py-10">
      {/* <div className="text-center space-y-10">
        <SectionTitle title="Fully Integrated Products" />
        <SectionDescrption customClass={"w-[50%] mx-auto"} />
      </div> */}
      <div className="grid lg:grid-cols-3 text-white">
        {arrayof6Cards.map((item, index) => (
          <ValuesCard
            key={index}
            title={item.title}
            description={item.description}
            icon={item.imgUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
