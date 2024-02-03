import React from "react";
import Button from "../common/button";
import { LuListFilter } from "react-icons/lu";
const Breadcrumb = () => {
  return (
    <div className="border-b py-10">
      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <h1 className="text-2xl font-bold">Tasks</h1>
          <span className="text-sm text-gray-600">Showing All</span>
        </div>
        <div className="flex items-center gap-4">
          <Button
            button={"+ Add Task"}
            customClass="bg-btgreen text-white text-sm rounded-lg w-fit px-5"
          />
          <div className="flex items-center gap-2">
            <div className="aspect-square rounded-full bg-white p-2">
              <LuListFilter />
            </div>
            <div className="text-sm font-semibold text-gray-600">
              Newest First
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
