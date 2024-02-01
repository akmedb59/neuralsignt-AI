import React from "react";

const ContactInfo = ({ type, value }) => {
  return (
    <div className="text-white space-y-1">
      <div className="uppercase font-semibold text-sm">{type}</div>
      <div className="text-lg">{value}</div>
    </div>
  );
};

export default ContactInfo;
