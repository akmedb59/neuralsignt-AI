import React from "react";

const ProjectCategory = ({ typ, customClass }) => {
  return (
    <div
      className={
        " w-fit rounded-md bg-purple-50 px-2 py-1  text-xs font-semibold  text-purple-400 " +
        customClass
      }
    >
      {typ}
    </div>
  );
};

export default ProjectCategory;
