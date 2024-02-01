import React from "react";

const Intro = () => {
  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-xl"
      style={{
        backgroundImage: "url('/auth-bg.svg')", // replace with your image path
        backgroundSize: "cover", // cover the entire div
        backgroundRepeat: "no-repeat", // don't repeat the image
        backgroundPosition: "center", // center the image
      }}
    >
      <div className="z-50 flex h-full flex-col items-center justify-between px-20 py-10 text-center text-white">
        <div>
          <div className="whitespace-nowrap text-3xl font-extrabold">
            Welcome to SnipByte
          </div>
          <div className="text-sm font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <div>
          <div className="whitespace-nowrap text-2xl font-semibold">
            Welcome to SnipByte
          </div>
          <div className="text-sm font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
