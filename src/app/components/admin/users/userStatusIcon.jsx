import React from "react";

const UserStatusIcon = ({ title, icon, number }) => {
  return (
    <div className="space-y-2  p-3">
      <p className="text-xs">{title}</p>
      <div className="flex items-center justify-between gap-2 text-xs">
        <div className="text-btpurple">{icon}</div>
        <div>{number}</div>
      </div>
    </div>
  );
};

export default UserStatusIcon;
