import React from "react";
import Layout from "@/widget/Layout";
import Image from "next/image";
import LogoFull from "../../../public/logo_komik.ico";

const aboutUs = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col bg-[#fefefe] lg:px-32 px-10 md:py-5 lg:py-8 pt-10 py-1 lg:mt-5 flex-wrap mb-44 justify-center items-center md:justify-start">
        <h1 className=" text-base md:text-2xl font-bold ml-5 md:ml-0">
          Tentang Kami
        </h1>
        <span className="border-b-stone-200 border-b-[1px] w-32 h-3 mb-20 font-bold ml-5 md:ml-0"></span>
        <div className="flex justify-between items-center flex-col-reverse lg:justify-start gap-10">
          <div className="flex flex-col gap-3 text-sm md:text-base">
            <p>
              Platform Komik Dewantara hadir sebagai solusi edukatif dan kreatif
              dalam menanggapi maraknya kasus bullying dan kekerasan seksual di
              lingkungan sekolah. Terinspirasi dari keprihatinan terhadap
              tingginya angka perundungan dan kekerasan seksual yang menimpa
              peserta didik di Indonesia, platform ini dikembangkan untuk
              menjadi ruang aman sekaligus media pembelajaran yang ramah bagi
              remaja.
            </p>
            <p>
              Dengan mengusung pendekatan e-comic (komik digital), Komik
              Dewantara menyajikan cerita-cerita yang relatable dan edukatif
              tentang berbagai bentuk bullying, dampaknya, serta langkah-langkah
              pencegahan yang bisa dilakukan oleh peserta didik. Tak hanya itu,
              platform ini juga menyampaikan informasi penting mengenai
              kekerasan seksual, hak perlindungan diri, dan bagaimana peserta
              didik dapat berani berbicara serta mencari bantuan.
            </p>
            <p>
              Melalui visual yang menarik dan narasi yang sederhana namun
              menyentuh, Komik Dewantara bertujuan menanamkan nilai-nilai
              empati, keberanian, dan kesadaran akan pentingnya menciptakan
              lingkungan sekolah yang aman dan suportif. Platform ini juga
              dilengkapi dengan fitur lomba poster kampanye, sebagai wadah
              partisipasi aktif peserta didik dalam menyuarakan pesan
              anti-bullying dan anti-kekerasan seksual.
            </p>
            <p>
              Komik Dewantara bukan hanya sekadar media digital, tetapi juga
              gerakan literasi visual untuk membangun generasi muda yang lebih
              peka, peduli, dan berdaya terhadap isu-isu kekerasan di sekitar
              mereka.
            </p>
          </div>
          <div className=" -mt-10">
            <Image
              src={LogoFull}
              alt="Logo"
              width={300}
              height={300}
              className="w-[150px] h-[150px] md:w-[300px] md:h-[300px]"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default aboutUs;
