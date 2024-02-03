"use client";
import React from "react";
import Header from "../../components/projectView/header";
import Breadcrumb from "../../components/projectView/breadcrumb";
import ProjectBoard from "../../components/projectView/projectBoard";

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
