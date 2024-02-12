"use client";
import React, { useState } from "react";
import Button from "../common/button";
import { LuListFilter } from "react-icons/lu";
import DropDown from "../common/dropDown";
const Breadcrumb = ({ setmodalIsOpen, isAdmin, setFilter }) => {
  const [filterModal, setFilterModal] = useState(false);
  return (
    <div className="border-b py-10">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-baseline gap-2 md:flex-row">
          <h1 className="text-2xl font-bold">Tasks</h1>
          {/* <span className="text-sm text-gray-600">Showing All</span> */}
        </div>

        <div className="flex items-center gap-4">
          {isAdmin ? (
            <div onClick={() => setmodalIsOpen(true)}>
              <Button
                button={"+ Add Task"}
                customClass="bg-btgreen text-white text-sm rounded-lg w-fit px-5"
              />
            </div>
          ) : null}
          <div>{/* <DropDown placeholder={"Filter By"} /> */}</div>
          <div
            className="relative flex cursor-pointer items-center gap-2"
            onClick={() => setFilterModal(!filterModal)}
          >
            <div className="aspect-square rounded-full bg-white p-2">
              <LuListFilter />
            </div>
            {/* <div className="text-sm font-semibold text-gray-600">
              Newest First
            </div> */}
            {filterModal ? (
              <div className="absolute right-0 top-full z-50 w-fit space-y-2 rounded-lg border bg-white p-3 text-sm ">
                <div
                  className="cursor-pointer whitespace-nowrap border-b hover:opacity-40"
                  onClick={() => setFilter("newest")}
                >
                  Newest First
                </div>
                <div
                  className="cursor-pointer border-b hover:opacity-40"
                  onClick={() => setFilter("oldes")}
                >
                  Oldest First
                </div>
                <div
                  className="cursor-pointer border-b hover:opacity-40"
                  onClick={() => setFilter("today")}
                >
                  Due Today
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
