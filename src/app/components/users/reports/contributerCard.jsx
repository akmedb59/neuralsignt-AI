import React from "react";
import Image from "next/image";

const ContributerCard = ({ id, contributions , img}) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 rounded-lg border bg-white py-10 shadow-lg">
      <div className="px-14">
        <Image
          src={img}
          width={100}
          height={100}
          alt="contributer"
          className="aspect-square h-full w-full overflow-hidden rounded-full object-cover"
        />
      </div>
      <div className="text-sm text-bgdark-grey">
        <div className="italic ">{id}</div>
        <div>{contributions} Contributions</div>
      </div>
    </div>
  );
};

export default ContributerCard;
