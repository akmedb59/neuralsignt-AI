import UsersListBreadCrumb from "@/app/components/admin/users/usersListBreadCrumb";
import React from "react";

const Page = () => {
  return (
    <div className="p-20">
      <div className=" text-lg font-extrabold">People 200</div>

      <div className="py-5">
        <UsersListBreadCrumb />
      </div>
      
    </div>
  );
};

export default Page;
