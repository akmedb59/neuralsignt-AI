import Button from "@/app/components/common/button";
import CheckBox from "@/app/components/common/checkBox";
import DropDown from "@/app/components/common/dropDown";
import Input from "@/app/components/common/input";
import React from "react";

const MemberSettings = () => {
  return (
    <div className="py-10">
      <div className="text-xl font-semibold">User Profile</div>
      <form action="">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="space-y-3">
            <Input
              label="Username"
              type="text"
              placeholder="Username"
              formType="profile"
              name="username"
            />
            <Input
              label="Email"
              type="email"
              placeholder="example@email.com"
              formType="profile"
              name="email"
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
              name="password"
            />
            <Input
              label="New Password"
              type="password"
              placeholder="New Password"
              formType="profile"
              name="password"
            />
            <Input
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              formType="profile"
              name="password"
            />

            <CheckBox label={"Email Notification"} />
            <CheckBox label={"Private Account"} />

            <Button />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MemberSettings;
