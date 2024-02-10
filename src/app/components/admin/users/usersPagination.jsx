"use client";
import React, { useState } from "react";

import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import ReactPaginate from "react-paginate";
import { FaPlus } from "react-icons/fa6";
import UserDetailCard from "./userDetailCard";

const UsersPagination = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalCards = 20;
  const PER_PAGE = 8;
  const offset = currentPage * PER_PAGE;

  const pageCount = Math.ceil(totalCards / PER_PAGE);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  return (
    <div className="py-10">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: totalCards }, (_, index) => (
          <UserDetailCard key={index} />
        )).slice(offset, offset + PER_PAGE)}
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
