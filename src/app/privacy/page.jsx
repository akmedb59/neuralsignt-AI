import React from "react";
import SideNav from "../components/privacy-policy/sideNav";
import SectionTitle from "../components/common/sectionTitle";

const privacyContents = [
  {
    id: 4,
    title: "Data Security",
    description:
      "We employ industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. Our commitment to data security ensures the confidentiality and integrity of your information.",
  },
  {
    id: 5,
    title: "Sharing Your Information",
    description:
      "We do not sell, trade, or rent your personal information to third parties. However, we may share data with trusted partners and service providers who assist us in delivering our products and services.",
  },
  {
    id: 6,
    title: "Your Choices and Rights",
    description:
      "You have the right to access, correct, or delete your personal information. You can also choose to opt-out of certain communications. Please contact us at [info@neuralsightai.com] to exercise your rights or discuss any concerns.",
  },
  {
    id: 7,
    title: "Updates to Privacy Policy",
    description:
      "We may update this Privacy Policy to reflect changes in our practices. We encourage you to review this policy periodically for any updates.",
  },
  {
    id: 8,
    title: "Contact Us",
    description:
      "If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at [info@neuralsightai.com].",
  },
];
const Page = () => {
  return (
    <div className="">
      <div className="lg:max-w-7xl mx-auto">
        <div className="sm:flex items-start gap-5">
          <div className="sm:w-1/4 sm:h-screen sm:sticky top-0 bg-bgSlateLight">
            <SideNav />
          </div>
          <div className="sm:w-3/4 p-10 md:p-10">
            <div>
              <SectionTitle title={"Privacy Policy"} size={""} />
            </div>
            <div className="flex flex-col text-gray-300">
              <div id="1" className="py-5">
                <div className="text-2xl font-bold py-2 capitalize">
                  Introduction
                </div>
                <p className="text-base">
                  Welcome to NeuralSightAI! We are committed to protecting your
                  privacy and ensuring the security of your personal
                  information. This Privacy Policy outlines how we collect, use,
                  disclose, and safeguard your data when you interact with our
                  website and utilize our products and services. By accessing or
                  using our website and products, you agree to the terms
                  outlined in this Privacy Policy. Please read this document
                  carefully to understand our practices regarding your personal
                  data.
                </p>
              </div>
              <div id="2" className="py-5">
                <div className="text-2xl font-bold py-2 capitalize">
                  Information We collect
                </div>
                <div className="text-lg font-bold py-2 capitalize">
                  Personal Information
                </div>
                <p className="">
                  We may collect personal information when you interact with
                  NeuralSightAI, such as when you use our products, subscribe to
                  our services, or contact us. This information may include, but
                  is not limited to:
                </p>
                <ul className="list-disc list-inside">
                  <li>Name</li>
                  <li>Contact Details (Email, Phone)</li>
                  <li>Billing and Payment Information</li>
                  <li>User prefrences and settings</li>
                </ul>
                <div className="text-lg font-bold py-2 capitalize">
                  Usage Data
                </div>
                <p className="">
                  We may automatically collect information about your use of our
                  website and products, including:
                </p>
                <ul className="list-disc list-inside">
                  <li>Device information (e.g., IP address, browser type)</li>
                  <li>
                    Log data (e.g., pages visited, time spent on the site)
                  </li>
                  <li>Cookies and similar technologies</li>
                </ul>
              </div>
              <div id="3" className="py-5">
                <div className="text-2xl font-bold py-2 capitalize">
                  How We Use Your Information
                </div>
                <div className="text-lg font-bold py-2 capitalize">
                  Product Enhancement
                </div>
                <p className="">
                  We use the information collected to enhance and personalize
                  your experience with our products, tailoring them to your
                  preferences and needs.
                </p>

                <div className="text-lg font-bold py-2 capitalize">
                  Communication
                </div>
                <p className="">
                  We may use your contact details to send important updates,
                  newsletters, and marketing communications related to our
                  products and services.
                </p>
              </div>
              {privacyContents.map((item) => (
                <div key={item.id} id={item.id} className="py-5 ">
                  <div
                    className="text-2xl font-bold py-2 capitalize"
                    id={item.id}
                  >
                    {item.title}
                  </div>
                  <p className="text-base">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
