import React from 'react'
import { IoSearch } from "react-icons/io5";
const Searchbox = ({placeholder}) => {
  return (
    <div className="flex items-center rounded-lg bg-white px-3 py-3">
      <IoSearch />

      <input
      
        type="text"
        className="bg-transparent pl-3 outline-none"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Searchbox