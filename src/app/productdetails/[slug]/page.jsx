import React from "react";
import SectionTitle from "@/app/components/common/sectionTitle";
import SectionDescrption from "@/app/components/common/sectionDescrption";
import DetailsCard from "@/app/components/details/detailsCard";

const arrayofFeatures = [
  {
    feature: "Driver Monitoring: Drowsiness Detection and Landmarks Extraction",
    description:
      "Utilizing advanced face detection algorithms, our system monitors the driver’s face for signs of drowsiness, fatigue, or distraction. Precise identification of face landmarks enables accurate tracking of facial features, including eyes, nose, and mouth.",
  },
  {
    feature:
      " Road Sign Awareness: Intelligent Algorithms for Real-time Information",
    description:
      "Recognizes and interprets road signs using intelligent algorithms. Provides drivers with real-time visual and auditory alerts based on the identified road signs.",
  },
  {
    feature: "AIBAS",
    description:
      "The AI-Based Attendance System that combines QR code generation, facial recognition.",
  },
  {
    feature: "EyeInnovate Diagnostics",
    description:
      "Explore precision diagnostics, convenient online assessments, a comprehensive information hub.",
  },
  {
    feature: "Theft and Damage Monitoring: Advanced Security Measures",
    description:
      " Incorporates facial recognition and theft detection algorithms to safeguard against unauthorized access and potential theft. Sensors detect unusual activity or impact, triggering immediate alerts to the vehicle owner in case of potential damage.",
  },
  {
    feature: "Blind Spot Monitoring: Camera and Sensor Technologies",
    description:
      "Monitors blind spots through a combination of camera and sensor technologies. Issues timely warnings to the driver about potential hazards during lane changes.",
  },
];
const arrayofBenefits = [
  {
    feature: "Proactive Driver Safety",
    description:
      "Precise monitoring of facial landmarks ensures early detection of driver fatigue, promoting safer driving habits.",
  },
  {
    feature: " Operational Efficiency",
    description:
      "Enhances driver awareness with immediate visual and auditory alerts based on recognized road signs, contributing to a more informed driving experience.",
  },
  {
    feature: "Data-Driven Decision Making",
    description:
      "Facial recognition and theft detection provide robust security against unauthorized access and potential theft, fostering peace of mind for vehicle owners.",
  },
  {
    feature: "Reduced Blind Spot Risks",
    description:
      "The integration of camera and sensor technologies minimizes blind spot-related risks, offering drivers timely warnings and preventing potential accidents.",
  },
];
const Page = ({ params }) => {
  return (
    <section className="space-y-20">
      <div
        className="text-center space-y-10 h-full lg:h-[50vh] "
        style={{
          backgroundImage: `url('/bg-products.jpg')`, // this will be dynamic
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-center items-center h-full py-20 bg-bgSlate bg-opacity-70 lg:px-20 px-10">
          <SectionTitle title={"Product Name " + params.slug} />
          <SectionDescrption customClass={"md:w-[50%] mx-auto"} />
        </div>
      </div>
      <div className="lg:px-20 px-10 py-10">
        <div className="lg:max-w-7xl mx-auto">
          <SectionTitle title="Key Features:" size={"text-5xl"} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 text-white gap-5 py-5">
            {arrayofFeatures.map((item, index) => (
              <DetailsCard
                key={index}
                title={item.feature}
                description={item.description}
              />
            ))}
          </div>
        </div>
        <div className="lg:max-w-7xl mx-auto">
          <SectionTitle title="Benefits:" size={"text-5xl"} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 text-white gap-5 py-5">
            {arrayofBenefits.map((item, index) => (
              <DetailsCard
                key={index}
                title={item.feature}
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
