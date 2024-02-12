import React from "react";
import { MdOutlineAssignment } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import ProjectCategory from "../../common/projectCategory";
import Link from "next/link";

const ActiveAssignments = () => {
  const tableheader = [
    {
      id: 0,
      name: "S.No.",
    },
    {
      id: 1,
      name: "Category",
    },
    {
      id: 2,
      name: "Title",
    },
    {
      id: 3,
      name: "Deadline",
    },
    // {
    //     id: 4,
    //     name: "Status",
    // },
    {
      id: 5,
      name: "Note",
    },
  ];

  const headList = tableheader.map((item) => (
    <th key={item.id} className="py-4 pr-4 text-left">
      {item.name}
    </th>
  ));

  // temporary data for table

  const tableData = [
    {
      id: 1,
      subject: "Web-App",
      assignment: "Lorem dfhug efhdubg usd dhguidsghbn 1",
      deadline: "10/10/2021",
      // status: "10",
    },
    {
      id: 2,
      subject: "Andriod-App",
      assignment: "Assignment 4",
      deadline: "10/10/2021",
      // status: "20",
    },
    {
      id: 3,
      subject: "Web-App",
      assignment: "Assignment 1",
      deadline: "10/10/2021",
      // status: "10",
    },
  ];

  const tableBody = tableData.map((item) => (
    <tr
      key={item.id}
      className="whitespace-nowrap border-b text-left text-sm font-semibold"
    >
      <td className="py-4">
        <input type="checkbox" />
      </td>
      <td>
        <ProjectCategory
          typ={item.subject}
          customClass={"text-purple-400 bg-purple-50"}
        />
      </td>
      <td className="pr-4">{item.assignment}</td>
      <td className="pr-4">{item.deadline}</td>
      {/* <td className='pr-4'>{item.status}</td> */}
      <td className="text-lg text-blue-500 opacity-60">
        <FaNoteSticky />
      </td>
    </tr>
  ));

  return (
    <div className="overflow-auto rounded-lg border  bg-white px-8 py-5">
      <table className="w-full">
        <caption className="mb-2">
          <div className="items-center justify-between text-sm sm:flex">
            <div className="flex items-center gap-2 font-bold">
              <div className="whitespace-nowrap">Active Tickets</div>
              <div className="text-lg text-blue-700">
                <MdOutlineAssignment />
              </div>
            </div>
            <div className="flex items-center gap-2 font-semibold text-blue-700">
              <Link href={"/user/tasks"} className="whitespace-nowrap">View all</Link>
              <div className="text-lg">
                <FaLongArrowAltRight />
              </div>
            </div>
          </div>
        </caption>
        <thead>
          <tr className="text-sm text-gray-500">{headList}</tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    </div>
  );
};

export default ActiveAssignments;
