import React from "react";
import MemberCard from "./memberCard";

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
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
        </tbody>
      </table>
    </div>
  );
};

export default MembersList;
