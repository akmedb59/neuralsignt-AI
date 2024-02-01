import React from 'react'
import SectionTitle from '../common/sectionTitle';
import SectionDescrption from '../common/sectionDescrption';
import { BsMouse2Fill } from "react-icons/bs";
import Image from "next/image";


const MainSection = () => {
  return (
    <section className="h-full flex items-center relative py-20">
      <div className="absolute w-[90%] md:w-[60%] right-0 bg-gradient-to-tr from-bgSlate via-bgSlateLight to-bgOrange bg-opacity-80 shadow-2xl rounded-2xl z-10 h-96">
       
          <div className="absolute text-white text-9xl bg-bgSlateLight bg-opacity-80 shadow-2xl p-4 rounded-xl right-20 top-20">
            <Image
              src={"/ai-svg.svg"}
              alt="img"
              width={150}
              height={150}
                className="fill-white  w-20 h-20 md:w-32 md:h-32"
            />
          </div>
        
      </div>
      <div className="md:w-[50%] space-y-10 relative z-10">
        <SectionTitle title="Best Quality and world Class AI Models" />
        <SectionDescrption />
        <div className="flex items-center text-bgOrange text-xl gap-4 hover:cursor-pointer">
          <div className="">
            <BsMouse2Fill />
          </div>
          <div className="text-lg font-semibold">LEARN MORE</div>
        </div>
      </div>
    </section>
  );
}

export default MainSection