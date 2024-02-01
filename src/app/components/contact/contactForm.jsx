import React from "react";
import InputField from "./inputField";
import Button from "../common/button";

const ContactForm = () => {
  return (
    <div>
      <form action="" className="space-y-2">
        <InputField
          type={"text"}
          placeholder={"Enter your Full Name"}
          name={"name"}
        />
        <InputField
          type={"email"}
          placeholder={"Enter your Email address"}
          name={"email"}
        />
        <div>
          <label
            htmlFor="details"
            className="text-white capitalize font-semibold pb-1 block text-left"
          >
            details
          </label>
          <textarea
            name="details"
            id="details"
            placeholder={"Your Idea/ Project Details"}
            rows="2"
            className="border-bgGray rounded-lg placeholder:text-sm w-full px-5 py-3 border outline-none focus:outline-none bg-bgSlateLight active:bg-bgSlateLight text-white"
          ></textarea>
        </div>

        {/* <InputField
          type={"text"}
          placeholder={"Your Idea/ Project Details"}
          name={"details"}
        /> */}
        <div className="pt-5">
          <Button text={"Send Message"} customClass={"px-8 py-2"} />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
