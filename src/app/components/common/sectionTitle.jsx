import React from "react";

const SectionTitle = ({ title, size }) => {
  return (
    <div className="w-full">
      <div
        className={
          "font-bold leading-snug tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-gray-100 to-gray-50 py-5 " +
          (size ? size : "text-4xl lg:text-6xl ")
        }
      >
        {title ? (
          title
        ) : (
          <>
            DATA-FIRST <br /> ML LIFECYCLE
          </>
        )}
      </div>
    </div>
  );
};

export default SectionTitle;
