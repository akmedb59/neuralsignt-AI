"use client";
import React, { useState } from "react";
import TaskCard from "./taskCard";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import ReactPaginate from "react-paginate";
import { FaPlus } from "react-icons/fa6";
import { tempTasksData } from "./tempDataTasks";
const TasksPagination = ({ setmodalIsOpen, isAdmin, filter }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalCards = 10;
  const PER_PAGE = isAdmin ? 5 : 6;
  const offset = currentPage * PER_PAGE;

  const pageCount = Math.ceil(totalCards / PER_PAGE);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  let tasks = tempTasksData;

  if (filter === "newest") {
    tasks.sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate));
  } else if (filter === "oldest") {
    tasks.sort((a, b) => new Date(a.addedDate) - new Date(b.addedDate));
  } else if (filter === "today") {
    const today = new Date().toISOString().slice(0, 10);
    tasks = tasks.filter((task) => task.dueDate.slice(0, 10) === today);
  } else if (filter === "all") {
    tasks = tempTasksData;
  }
  const taskCards = tasks
    .slice(offset, offset + PER_PAGE)
    .map((task) => <TaskCard key={task.id} title={task.title} />);

  return (
    <div className="py-10">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {taskCards}
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
