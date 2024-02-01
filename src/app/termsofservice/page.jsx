import React from "react";
import SectionTitle from "../components/common/sectionTitle";
import SectionDescrption from "../components/common/sectionDescrption";
import FaqAccordian from "../components/landing/faqSec/faqAccordian";

const tempQuestions = [
  {
    id: 1,
    show: true,
    question: "1. What is NeuralSightAI's primary focus?",
    answer:
      "NeuralSightAI specializes in AI-based computer vision solutions designed for edge platforms, aiming to transform everyday devices into intelligent tools that can understand and adapt to their surroundings.",
  },
  {
    id: 2,
    show: false,
    question:
      "2. Who leads NeuralSightAI, and what expertise does the team possess?",
    answer:
      "NeuralSightAI is led by experts in AI and ML with over 20 years of combined industrial experience. The team includes more than 10 PhD graduates from renowned universities, contributing expertise in AI, ML, Image Processing, NLP, and more.",
  },
  {
    id: 3,
    show: false,
    question: "3. In which areas does NeuralSightAI offer expertise?",
    answer:
      "Our team has deep expertise in Edge AI, Tiny ML, computer vision, and software engineering, staying at the forefront of technological advancements to push the boundaries of what is possible with AI.",
  },
  {
    id: 4,
    show: false,
    question:
      "4. How does NeuralSightAI ensure customized solutions for clients?",
    answer:
      "We work closely with our clients to understand their unique business needs, offering a customer-centric approach to develop custom solutions that address specific challenges and requirements.",
  },
  {
    id: 5,
    show: false,
    question: "5. Is NeuralSightAI committed to making AI accessible?",
    answer:
      "Absolutely. We believe AI should be accessible to all, and our products are designed to be user-friendly and adaptable for businesses of all sizes.",
  },
  {
    id: 6,
    show: false,
    question:
      "6. What industries does NeuralSightAI serve with its computer vision solutions?",
    answer:
      "NeuralSightAI serves a diverse range of industries, including healthcare, automotive, manufacturing, and retail, providing tailored computer vision solutions to enhance safety, efficiency, and automation.",
  },
  {
    id: 7,
    show: false,
    question:
      "7. Can NeuralSightAI's solutions be adopted by businesses of all sizes?",
    answer:
      "Yes, our solutions are scalable and designed to be adopted by businesses of all sizes, ensuring accessibility and usability for a wide range of organizations.",
  },
  {
    id: 8,
    show: false,
    question:
      "8.	What is NeuralSightAI's vision for the future of AI and computer vision?",
    answer:
      "NeuralSightAI envisions revolutionizing global perception and interaction through artificial intelligence and computer vision. We aim to deliver cutting-edge solutions that prioritize safety, efficiency, and convenience, fostering a collaborative ecosystem for a more interconnected, intelligent, and sustainable future.",
  },
  {
    id: 9,
    show: false,
    question: "9.	How can NeuralSightAI's solutions benefit my business?",
    answer:
      "Our solutions are designed to have a positive impact on businesses and society by enhancing safety and security, increasing efficiency, and reducing costs. We work closely with clients to develop custom solutions tailored to their specific needs.",
  },
  {
    id: 10,
    show: false,
    question:
      "10. How does NeuralSightAI stay at the forefront of AI and computer vision innovation?",
    answer:
      "We are dedicated to advancing technology by constantly pushing the envelope and developing state-of-the-art solutions. Our goal is to shape a world where innovation elevates human experiences and redefines the possibilities of intelligent technology.",
  },
];



const Page = () => {
  return (
    <div className="lg:px-20 px-10">
      <div className="lg:max-w-7xl mx-auto">
        <div>
          <div className="text-center py-5 md:py-10">
            <SectionTitle title="Terms of Service" size={""} />
          </div>
          <div className="sm:px-10 py-5 md:py-10">
            <SectionDescrption
              data={`Welcome to NeuralSightAI, a leading Artificial Intelligence (AI) company dedicated to providing innovative solutions for [specific industry or purpose]. By accessing and using our website, products, and services, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before using our services.`}
            />
          </div>
        </div>
        <div className="py-5 md:py-10 ">
          <FaqAccordian questionList={tempQuestions} />
        </div>
      </div>
    </div>
  );
};

export default Page;
