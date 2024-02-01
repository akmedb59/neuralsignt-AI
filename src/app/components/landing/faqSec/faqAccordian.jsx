"use client";
import React, { useState } from "react";



const FaqAccordian = ({ questionList }) => {
  const [faqs, setFaqs] = useState(questionList ? questionList : tempQuestions);

  const toggleFaq = (id) => {
    setFaqs(
      questionList?.map((faq) =>
        faq.id === id ? { ...faq, show: !faq.show } : faq
      )
    );
  };

  return (
    <>
      <div className="bg-bgSlate">
        <div className="text-center mx-auto dark:text-white text-gray-950">
          <div
            id="accordion-collapse"
            className="md:text-left text-center border border-gray-200 rounded dark:border-gray-700 "
            data-accordion="collapse"
          >
            {faqs.map((faq) => (
              <div key={faq.id}>
                <h2 id={"accordion-collapse-body-" + faq.id}>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200
                            focus:outline-none dark:border-gray-700 dark:text-gray-400 hover:bg-lightCard dark:hover:bg-darkCard"
                    data-accordion-target={"#accordion-collapse-body-" + faq.id}
                    aria-expanded={faq.show ? "true" : "false"}
                    aria-controls={"accordion-collapse-body-" + faq.id}
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span>{faq.question}</span>
                    <svg
                      data-accordion-icon
                      className={`w-6 h-6 ${
                        faq.show ? "rotate-180" : ""
                      } shrink-0`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div
                  id={"accordion-collapse-body-" + faq.id}
                  className={faq.show ? "" : "hidden"}
                  aria-labelledby={`accordion-collapse-heading-${faq.id}`}
                >
                  <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-darkCard bg-lightCard">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqAccordian;
