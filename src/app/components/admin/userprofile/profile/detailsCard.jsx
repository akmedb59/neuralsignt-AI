import React from "react";

const DetailsCard = () => {
  return (
    <div className="my-5 rounded-lg bg-bggrey p-5">
      <div className="py-4 text-lg font-bold">Personal Information</div>
      <table className="w-full text-sm">
        <tbody >
          <tr>
            <td className="py-2 text-gray-400">Name</td>
            <td className="py-2 font-semibold">John Doe</td>
          </tr>
          <tr>
            <td className="py-2 text-gray-400">Gender</td>
            <td className="py-2 font-semibold">Male</td>
          </tr>
          <tr>
            <td className="py-2 text-gray-400">Reporting to</td>
            <td className="py-2 font-semibold">John Doe</td>
          </tr>
          <tr>
            <td className="py-2 text-gray-400">Date of Birth</td>
            <td className="py-2 font-semibold">20-20-2033</td>
          </tr>
          <tr>
            <td className="py-2 text-gray-400">Age</td>
            <td className="py-2 font-semibold">20</td>
          </tr>
          <tr>
            <td className="py-2 text-gray-400">Country</td>
            <td className="py-2 font-semibold">Pakistan</td>
          </tr>
          <tr>
            <td className="py-2 text-gray-400">Mobile Number</td>
            <td className="py-2 font-semibold">34654125</td>
          </tr>
          <tr>
            <td className="py-2 text-gray-400">Blood Group</td>
            <td className="py-2 font-semibold">B+</td>
          </tr>
          <tr>
            <td className="py-2 text-gray-400">Qualifications</td>
            <td className="py-2 font-semibold">BS CS</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DetailsCard;
