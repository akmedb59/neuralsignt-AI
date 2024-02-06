"use client";
import React from "react";
import Header from "../../components/admin/projectView/header";
import Breadcrumb from "../../components/admin/projectView/breadcrumb";
import ProjectBoard from "../../components/admin/projectView/projectBoard";

const Page = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-50">
        <Breadcrumb />
        <ProjectBoard />
      </div>
    </>
  );
};

export default Page;
