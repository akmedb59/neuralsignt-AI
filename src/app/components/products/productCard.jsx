import React from "react";
import Link from "next/link";

const ProductCard = ({ name, img, description, link }) => {
  return (
    <div className="bg-gradient-to-tr from-bgOrange via-bgSlateLight to-bgOrange w-full h-full pb-0.5 rounded-xl">
      <div
        className="relative block rounded-xl overflow-hidden hover:cursor-pointer h-96"
        style={{
          backgroundImage: `url('${img}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 z-10 transform translate-y-1/2 hover:translate-y-0 transition-all duration-300 ease-in-out">
          <div className="relative flex gap-5 py-5 flex-col bg-bgSlateLight text-bgSlate px-4 ">
            <div className="h-[50%] ">
              <div className="font-bold text-lg text-white">{name}</div>
              <div className="text-xs text-gray-500">
                Posted on <span className="font-semibold">May 14, 2021</span>
              </div>
            </div>
            <div className="h-[50%]">
              <div className="text-xs mb-3 text-gray-500">{description}</div>
                <Link
                  href={link}
                  className="text-xs text-white bg-bgSlateLight py-1.5 px-3 rounded-lg border border-bgOrange hover:bg-bgSlate"
                >
                  Read More
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
