import React from "react";
import { MdAssignmentAdd } from "react-icons/md";
import { MdOutlineAddToPhotos } from "react-icons/md";
import Image from "next/image";

const CurrentAssignments = () => {
  const currentAssignments = [
    {
      id: 1,
      image: "/class1.jpg",
      subject: "Student Management",
    },
    {
      id: 2,
      image: "/class2.jpg",
      subject: "Hospital Services",
    },
    {
      id: 3,
      image: "/class3.jpeg",
      subject: "Classroom Management",
    },
  ];

  const currentAssignmentsList = currentAssignments.map((item) => (
    <div key={item.id}>
      <Image
        src={item.image}
        width={100}
        height={100}
        className="mb-2 w-[90vw] rounded  object-cover sm:h-[10vh] sm:w-[20vw] md:h-[18vh]"
        alt="Assignment"
      />
      <div className="text-xs font-semibold">{item.subject}</div>
    </div>
  ));

  return (
    <div className="rounded-lg border px-8 py-5 bg-white">
      <div className="mb-2 flex items-center gap-2 text-sm font-bold">
        <div className="whitespace-nowrap">Quick Access</div>
        <div className="text-lg text-blue-700">
          <MdAssignmentAdd />
        </div>
      </div>
      <div className="flex flex-col items-start justify-between gap-3 py-4 sm:flex-row">
        {currentAssignmentsList}

        <div className="flex h-[20vh] w-full flex-col items-center justify-center rounded-lg bg-gray-100 text-center text-gray-400 sm:h-[10vh] sm:w-[20vw] md:h-[18vh] md:w-[15vw]">
          <div>
            <MdOutlineAddToPhotos />
          </div>
          <div className="mt-1 text-xs md:whitespace-nowrap">Add New</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentAssignments;
