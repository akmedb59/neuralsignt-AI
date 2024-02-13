"use client";
import React, { useState } from "react";
import { usersListData } from "./tempDataUsers";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import ReactPaginate from "react-paginate";
import UserDetailCard from "./userDetailCard";

const UsersPagination = ({ categoryFilter, search }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalCards = 10;
  const PER_PAGE = 8;
  const offset = currentPage * PER_PAGE;

  const pageCount = Math.ceil(totalCards / PER_PAGE);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  let filteredData = usersListData;

  if (categoryFilter !== "all" && categoryFilter) {
    filteredData = filteredData.filter(
      (user) =>
        user.category.toLowerCase().replace(/\s/g, "") === categoryFilter,
    );
  }

  // console.log(filteredData);
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {filteredData
          .filter(
            (user) =>
              user.name.toLowerCase().includes(search.toLowerCase()) ||
              user.category.toLowerCase().includes(search.toLowerCase()) ||
              user.number.toString().includes(search) ||
              user.email.toLowerCase().includes(search.toLowerCase()),
          )
          .map((data, index) => (
            <UserDetailCard
              key={index}
              name={data.name}
              post={data.category}
              number={data.number}
              email={data.email}
            />
          ))
          .slice(offset, offset + PER_PAGE)}
      </div>

      <ReactPaginate
        previousLabel={<IoMdArrowDropleft />}
        nextLabel={<IoMdArrowDropright />}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={
          "flex gap-4 sm:gap-8 bg-white w-fit m-auto p-4 items-center justify-center mt-8 rounded-lg"
        }
        previousLinkClassName={"cursor-pointer"}
        nextLinkClassName={"cursor-pointer"}
        disabledClassName={"text-gray-400 cursor-not-allowed"}
        activeClassName={"font-bold"}
      />
    </div>
  );
};

export default UsersPagination;
