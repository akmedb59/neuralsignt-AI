"use client";
import React, { useState } from "react";
import TaskCard from "./taskCard";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import ReactPaginate from "react-paginate";
import { FaPlus } from "react-icons/fa6";
const TasksPagination = ({ setmodalIsOpen, isAdmin }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalCards = 20;
  const PER_PAGE = isAdmin ? 5 : 6;
  const offset = currentPage * PER_PAGE;

  const pageCount = Math.ceil(totalCards / PER_PAGE);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  return (
    <div className="py-10">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: totalCards }, (_, index) => (
          <TaskCard key={index} />
        )).slice(offset, offset + PER_PAGE)}
        {isAdmin ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-5 rounded-lg bg-white py-10 shadow">
            <div
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-bggrey"
              onClick={() => setmodalIsOpen(true)}
            >
              <FaPlus />
            </div>
            <div>Start New Project</div>
          </div>
        ) : null}
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

export default TasksPagination;
