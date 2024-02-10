import UsersPagination from "@/app/components/admin/users/UsersPagination";
import UserDetailCard from "@/app/components/admin/users/userDetailCard";
import UsersListBreadCrumb from "@/app/components/admin/users/usersListBreadCrumb";
import React from "react";

const Page = () => {
  return (
    <div className="px-5 lg:px-20">
      <div className="py-5 text-lg font-extrabold">People 200</div>

      <div className="py-5">
        <UsersListBreadCrumb />
      </div>
      <UsersPagination />

    </div>
  );
};

export default Page;
