import React from "react";
import Layout from "@/widget/Layout";
import LogoFull from "../../../public/logo_komik.ico";
import Image from "next/image";
const team = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col bg-[#fefefe] lg:px-32 md:px-10 md:py-5 lg:py-8 pt-10 py-1 lg:mt-5 mb-10">
        <div className="flex justify-between">
          <Image src={LogoFull} width={350} height={350} alt="foto" />
          <div className="flex flex-col">
            <h3>Dr. Munir ...</h3>
            <h4>Dosen Pembimbing</h4>
            <p>lorem...</p>
          </div>
        </div>
        <div className="flex flex-col my-10">
          <h1 className=" text-xl md:text-2xl font-bold ml-5 md:ml-0">
            Team Member
          </h1>
          <span className="border-b-stone-200 border-b-[1px] w-32 h-3 mb-5 font-bold ml-5 md:ml-0"></span>
          <div className="flex">
            <div className="flex flex-col">
              <Image src={LogoFull} width={250} height={250} alt="foto" />
              <p>profile anggota</p>
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default team;
