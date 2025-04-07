import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoFull from "../../public/logo_komik.ico";
const TentangPlatform = () => {
  return (
    <div className="w-full h-[800px] md:h-[500px] flex flex-col bg-[#fefefe] lg:px-32 md:px-10 md:py-5 lg:py-5 md:pt-10 pt-0 py-1 lg:mt-10 flex-wrap">
      <h1 className=" text-xl md:text-2xl font-bold ml-5 md:ml-0">
        Selengkapnya Mengenai Platform Kami
      </h1>
      <span className="border-b-stone-200 border-b-[1px] w-32 h-3 mb-5 font-bold ml-5 md:ml-0"></span>
      <div className="flex justify-center items-center flex-col lg:flex-row lg:justify-around mx-1 md:mx-0 gap-20">
        <div className="w-3/4">
          Platform Komik Dewantara hadir sebagai solusi edukatif dan kreatif
          dalam menanggapi maraknya kasus bullying dan kekerasan seksual di
          lingkungan sekolah. Terinspirasi dari keprihatinan terhadap tingginya
          angka perundungan dan kekerasan seksual yang menimpa peserta didik di
          Indonesia, platform ini dikembangkan untuk menjadi ruang aman
          sekaligus media pembelajaran yang ramah bagi remaja. Dengan mengusung
          pendekatan e-comic (komik digital), Komik Dewantara menyajikan
          cerita-cerita yang relatable dan edukatif tentang berbagai bentuk
          bullying...
          <div className="flex mx-3 gap-4 my-3">
            <Link href="/about-us" className="hover:text-[#006837]">
              Lanjut Baca
            </Link>
            <Link href="/legal" className="hover:text-[#006837]">
              Pelajari Hak Cipta
            </Link>
          </div>
        </div>
        <div className="w-1/4 -mt-10">
          <Image src={LogoFull} alt="Logo" width={200} height={200} />
        </div>
      </div>
    </div>
  );
};

export default TentangPlatform;
