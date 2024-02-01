import React from "react";
import MainSection from "../components/about/mainSection";
import ProductsSection from "../components/about/productsSection";
import ValuesSection from "../components/about/valuesSection";

const Page = () => {
  return (
    <div className="w-full h-full lg:px-20 px-10">
      <div className="lg:max-w-7xl mx-auto">
        <MainSection />
        <ValuesSection />
        <ProductsSection />
      </div>
    </div>
  );
};

export default Page;
