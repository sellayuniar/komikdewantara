import React from "react";
import Layout from "@/widget/Layout";

const faq = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col bg-[#fefefe] lg:px-32 md:px-10 md:py-5 lg:py-8 pt-10 py-1 lg:mt-5 flex-wrap mb-10">
        <h1 className=" text-xl md:text-2xl font-bold ml-5 md:ml-0">
          Frequent Asked Questions (FAQ)
        </h1>
        <span className="border-b-stone-200 border-b-[1px] w-32 h-3 mb-5 font-bold ml-5 md:ml-0"></span>
        <div className="flex justify-start items-start flex-col flex-wrap lg:justify-start gap-5"></div>
      </div>
    </Layout>
  );
};

export default faq;
