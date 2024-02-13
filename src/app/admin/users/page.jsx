"use client";
import React, { useState } from "react";
import UsersPagination from "@/app/components/admin/users/usersPagination";
import UsersListBreadCrumb from "@/app/components/admin/users/usersListBreadCrumb";

const Page = () => {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="px-5 lg:px-20">
      <div className="py-5 text-lg font-extrabold">People 200</div>

      <div className="py-5">
        <UsersListBreadCrumb
          setCurrentFilter={setCurrentFilter}
          setSearchValue={setSearchValue}
        />
      </div>
      <UsersPagination categoryFilter={currentFilter} search={searchValue} />
    </div>
  );
};

export default Page;
