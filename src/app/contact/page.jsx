import React from "react";
import SectionTitle from "../components/common/sectionTitle";
import SectionDescrption from "../components/common/sectionDescrption";
import ContactInfo from "../components/contact/contactInfo";
import Image from "next/image";
import ContactForm from "../components/contact/contactForm";
import SocialsArray from "../components/common/socialsArray";

const Page = () => {
  return (
    <div className="relative h-full lg:h-full">
      <div className="absolute inset-0 lg:w-[50%] h-full">
        <Image
          src="/contact.webp"
          alt="Picture of the author"
          width={500}
          height={500}
          className="w-full h-full object-cover relative"
        />
        <div className="absolute inset-0 bg-bgSlate bg-opacity-50"></div>
      </div>
      <div className="relative lg:px-20 px-10 lg:max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 h-full">
          <div className="flex flex-col justify-between h-full w-full py-10 lg:pr-10 ">
            <div className="">
              <SectionTitle title={"Have a Project in mind?"} />
              <SectionDescrption />
            </div>
            <div className=" flex flex-col gap-5">
              <ContactInfo type={"Address"} value={"Sydney, Australia"} />
              <ContactInfo type={"Email"} value={"ai-company@ai.com"} />
              <ContactInfo type={"Phone"} value={"+012-3456789"} />
            </div>
          </div>
          <div className="mx-auto w-full lg:px-20 space-y-10 py-10 text-center">
            <SectionTitle title={"Contact Us"} size={"text-4xl"} />
            <ContactForm />
            <SocialsArray />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
