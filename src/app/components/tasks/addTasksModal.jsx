import React, { useState } from "react";
import Modal from "react-modal";
import Input from "../common/input";
import Select from "react-select";
import Button from "../common/button";
import { IoClose } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";
const AddTasksModal = ({ modalIsOpen, closeModal }) => {
  // Modal Styles
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "0.5rem",
    },
  };

  const mltoptions = [
    { value: "dev1", label: "Developer 1" },
    { value: "dev2", label: "Developer 2" },
    { value: "dev3", label: "Developer 3" },
  ];

  const optionsStyle = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "white",
      borderColor: "#e5e7eb",
      width: "100%",
      padding: "0.1rem",

      borderRadius: "0.5rem",
      // boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      outline: "none",
      // borderColor: state.isFocused ? "grey" : "red",
      // outline: state.isFocused ? "none" : "orange",
      outline: "none",
      "&:focus": {
        outline: "none",
      },
      "&:hover": {
        outline: "none",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      fontSize: "0.875rem",
    }),
  };

  Modal.setAppElement("body");
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="relative w-96">
          <div className="absolute right-0 top-0 text-lg">
            <button onClick={closeModal}>
              <IoClose />
            </button>
          </div>
          <div className="py-5">
            <div className="text-lg font-semibold">Project Details</div>
            <p className="text-sm text-gray-600">
              Welcome! Create a new task to get started.
            </p>
          </div>
        </div>

        <form className="w-full">
          <Input label="Title" type="text" placeholder="Enter Task Title" />
          <label htmlFor="categories" className="text-xs font-semibold">
            Select Developers
          </label>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={mltoptions}
            isMulti={true}
            styles={optionsStyle}
            className="mb-3 rounded-lg shadow-sm"
          />

          <div className="grid w-full grid-cols-2 gap-2 text-sm">
            <Input label="Start Date" type="date" placeholder="none" />
            <Input label="Due Date" type="date" placeholder="none" />
          </div>
          <label htmlFor="notes" className="text-xs font-semibold">
            Notes
          </label>
          <textarea
            name="notes"
            className="h-32 w-full rounded-lg border p-2 outline-none focus:outline-none"
          />
          <div className="flex items-center justify-between pt-5">
            <div className="flex items-center gap-2 text-btgreen">
              <div className="">
                <LuMessagesSquare />
              </div>
              <div>Need help?</div>
            </div>
            <Button
              button={"Add Project"}
              customClass="bg-btgreen text-white text-sm rounded-lg w-fit px-5"
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTasksModal;
