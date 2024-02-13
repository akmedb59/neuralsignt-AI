import React from "react";
import MemberCard from "./memberCard";
import { usersListData } from "./tempDataMembers";
const MembersList = () => {
  return (
    <div className="rounded-lg bg-bggrey p-5">
      <table className="w-full text-left">
        <thead className="text-xs text-bgdark-grey">
          <tr>
            <th>Name</th>
            <th>Added</th>
            <th>Last Active</th>
          </tr>
        </thead>
        <tbody>
          {usersListData.map((data, index) => (
            <MemberCard key={index} data={data} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MembersList;
