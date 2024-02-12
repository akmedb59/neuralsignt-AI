"use client";
import Button from "@/app/components/common/button";
import CheckBox from "@/app/components/common/checkBox";
import DropDown from "@/app/components/common/dropDown";
import Input from "@/app/components/common/input";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editFormVal } from "@/app/components/common/formValidationSchema";

const MemberSettings = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editFormVal),
  });
  const formValidation = (data) => console.log(data);
  return (
    <div className="py-10">
      <div className="text-xl font-semibold">User Profile</div>
      <form onSubmit={handleSubmit(formValidation)}>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <Input
                type="text"
                placeholder="First Name"
                label={"First Name"}
                name={"firstname"}
                register={register}
                err={errors}
              />
              <Input
                type="text"
                placeholder="Last Name"
                label={"Last Name"}
                name={"lastname"}
                register={register}
                err={errors}
              />
            </div>
            <Input
              label="Username"
              type="text"
              placeholder="Username"
              formType="profile"
              name="username"
              register={register}
              err={errors}
            />
            <Input
              label="Email"
              type="email"
              placeholder="example@email.com"
              formType="profile"
              name="email"
              register={register}
              err={errors}
            />
            <DropDown label={"Gender"} placeholder={"Gender"} />
            <div className="grid grid-cols-3 gap-2">
              <DropDown label={"Month"} placeholder={"January"} />
              <DropDown label={"Day"} placeholder={"10"} />
              <DropDown label={"Year"} placeholder={"2024"} />
            </div>
            <DropDown label={"Language"} placeholder={"Language"} />
            <DropDown label={"Country"} placeholder={"Country"} />
          </div>
          <div className="space-y-3">
            <Input
              label="Current Password"
              type="password"
              placeholder="Current Password"
              formType="profile"
              name="currentpassword"
              register={register}
              err={errors}
            />
            <Input
              label="New Password"
              type="password"
              placeholder="New Password"
              formType="profile"
              name="newpassword"
              register={register}
              err={errors}
            />
            <Input
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              formType="profile"
              name="newconfirmpassword"
              register={register}
              err={errors}
            />

            <CheckBox label={"Email Notification"} />
            <CheckBox label={"Private Account"} />

            <Button action={"submit"} button="Update"/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MemberSettings;
