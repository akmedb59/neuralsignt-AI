import React from "react";
import Button from "../../common/button";
import UserStatusIcon from "./userStatusIcon";
import { FaPaperclip } from "react-icons/fa6";
import Searchbox from "../../common/searchbox";
import DropDown from "../../common/dropDown";
import { TbTableOptions } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
const UsersListBreadCrumb = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 overflow-hidden rounded-lg bg-btpurple bg-opacity-10">
          <UserStatusIcon title="Active" icon={<FaPaperclip />} number="200" />
          <UserStatusIcon title="Active" icon={<FaPaperclip />} number="200" />
          <UserStatusIcon title="Active" icon={<FaPaperclip />} number="200" />
          <UserStatusIcon title="Active" icon={<FaPaperclip />} number="200" />
        </div>
        <div className="flex items-center gap-5">
          <Button button="Register time away" />
          <Button
            button="Add new employee"
            customClass="bg-btgreen text-white "
          />
        </div>
      </div>
      <hr className="my-5" />
      <div className="flex items-center justify-between rounded-lg bg-btpurple bg-opacity-10 px-3 py-2">
        <div className="flex items-center gap-5">
          <Searchbox placeholder="Search users" />
          <DropDown placeholder="Position" />
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-5">
            Sort By{" "}
            <input
              type="date"
              className="appearance-none rounded-lg border border-gray-200 px-3 py-2 leading-tight text-gray-700 focus:border-transparent focus:outline-none "
            />
          </div>
          <div className="flex items-center gap-3 text-btpurple">
            <div>
              <TbTableOptions />
            </div>
            <div>
              <FaBars />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersListBreadCrumb;
