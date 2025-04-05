import React from "react";
import Link from "next/link";
import Image from "next/image";
const TentangPlatform = () => {
  return (
    <div className="w-full h-[800px] md:h-[500px] flex flex-col bg-[#fefefe] lg:px-32 md:px-10 md:py-5 lg:py-5 md:pt-10 pt-0 py-1 lg:mt-10 flex-wrap">
      <h1 className=" text-xl md:text-2xl font-bold ml-5 md:ml-0">
        Selengkapnya Mengenai Platform Kami
      </h1>
      <span className="border-b-stone-200 border-b-[1px] w-32 h-3 mb-5 font-bold ml-5 md:ml-0"></span>
      <div className="flex justify-start items-start flex-col lg:flex-row lg:justify-around mx-1 md:mx-0">
        <div className="w-3/4">
          Rendahnya minat baca anak Indonesia di tengah tingginya angka melek
          huruf merupakan latar belakang kami mengembangkan project Website
          OEPPAK Dongeng ini. Website OEPPAK Dongeng diharapkan dapat merangsang
          minat, kegemaran, dan rasa ingin tahu anak-anak terhadap kesusastraan.
          Website OEPPAK Dongeng diharapkan pula dapat memberikan perasaan
          menyenangkan kepada anak saat membaca karena pada website ini cerita
          dongeng disajikan secara interaktif dengan audio...
          <div className="flex mx-3 gap-4 my-3">
            <Link href="">Lanjut Baca</Link>
            <Link href="">Pelajari Hak Cipta</Link>
          </div>
        </div>
        <div className="w-1/4">
          <p>Logo image</p>
        </div>
      </div>
    </div>
  );
};

export default TentangPlatform;
