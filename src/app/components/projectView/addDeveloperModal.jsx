import React, { useState } from "react";
import Modal from "react-modal";
import Input from "../common/input";
import Select from "react-select";
import Button from "../common/button";
import { IoClose } from "react-icons/io5";

const AddDeveloperModal = ({ modalIsOpen, closeModal }) => {
  // Modal Styles
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
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
        <div className="relative rounded-lg">
          <div className="absolute right-0 top-0">
            <button onClick={closeModal}>
              <IoClose />
            </button>
          </div>
          <div className="pb-5 text-lg font-semibold">Add Developer</div>
        </div>

        <form className="w-[300px]">
          {/* <Input label="Title" type="text" placeholder="Enter Project Title" /> */}
          <label htmlFor="categories" className="text-xs font-semibold">
            Add Developer
          </label>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={mltoptions}
            isMulti={true}
            styles={optionsStyle}
            className="mb-3 rounded-lg shadow-sm"
          />

          <Input label="Comments" type="text" placeholder="Comment" />
          {/* <div className="text-sm">
            <Input label="Due Date" type="date" placeholder="none" />
          </div> */}

          
          <div className="pt-5">
            <Button
              button={"Add Developer"}
              customClass="bg-btgreen text-white text-sm rounded-lg w-fit px-5"
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddDeveloperModal;
