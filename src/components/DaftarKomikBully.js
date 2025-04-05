import React from "react";
import Link from "next/link";
import Image from "next/image";

const gambarDummy =
  "https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/thumbnail_homepage%2Fhomepage_kelinci_kura.png?alt=media&token=7feb26dc-3f0b-45ae-b17b-c3b55e51c0c3";

const DaftarKomikBully = () => {
  return (
    <div className="w-full h-[900px] md:h-[1400px] lg:h-[650px] flex flex-col bg-[#fefefe] lg:px-32 md:px-10 md:py-5 lg:py-8 pt-10 py-1 lg:mt-10 flex-wrap">
      <h1 className=" text-xl md:text-2xl font-bold ml-5 md:ml-0">
        Komik Bullying
      </h1>
      <span className="border-b-stone-200 border-b-[1px] w-32 h-3 mb-5 font-bold ml-5 md:ml-0"></span>
      <div className="flex justify-start items-start flex-row flex-wrap lg:justify-around h-[700px] md:h-[1200px] lg:h-[400px] mx-1 md:mx-0">
        {/* card */}
        <div className="lg:h-[350px] md:w-[300px] h-[200px] w-[150px] rounded-md flex flex-col mr-1">
          <Image
            src={gambarDummy}
            className="md:h-[350px] h-[250px] object-cover rounded-lg"
            alt=""
            width={350}
            height={250}
          />
          <span className=" bg-[#fefefe] rounded-md p-2 flex flex-col">
            <h3 className="md:text-lg text-sm font-bold py-1">
              Sepulang Sekolah
            </h3>
            <p className="md:text-xs text-[8px] mb-2 text-center font-semibold bg-red-300 p-1 rounded-full w-2/4">
              Bullying Fisik
            </p>
            <p className="text-xs pb-2 text-slate-500">Kreator: Sella</p>
          </span>
          <span className="mx-2 bg-[#BFEEC5] w-full md:py-5 py-3 md:border-t-2 border-t-[1px] border-t-gray-300 rounded-md">
            <Link
              href="/baca-cerita/bullying-fisik"
              className="cursor-pointer md:text-sm text-xs font-bold md:px-8 px-4 ml-3 text-[#fefefe] bg-[#00AA13] w-2/4 rounded-full md:py-3 py-2"
            >
              Baca
            </Link>
          </span>
        </div>

        {/* card */}
        <div className="md:h-[350px] md:w-[300px] h-[200px] w-[150px] rounded-md flex flex-col">
          <Image
            src={gambarDummy}
            className="md:h-[350px] h-[250px] object-cover rounded-lg"
            alt=""
            width={350}
            height={250}
          />
          <span className=" bg-[#fefefe] rounded-md p-2 flex flex-col">
            <h3 className="md:text-lg text-sm font-bold py-1">
              Sepulang Sekolah
            </h3>
            <p className="md:text-xs text-[8px] mb-2 text-center font-semibold bg-red-300 p-1 rounded-full w-2/4">
              Bullying Fisik
            </p>
            <p className="text-xs pb-2 text-slate-500">Kreator: Sella</p>
          </span>
          <span className="mx-2 bg-[#BFEEC5] w-full md:py-5 py-3 md:border-t-2 border-t-[1px] border-t-gray-300 rounded-md">
            <Link
              href="/artikel/budi-utomo"
              className="cursor-pointer md:text-sm text-xs font-bold md:px-8 px-4 ml-3 text-[#fefefe] bg-[#00AA13] w-2/4 rounded-full md:py-3 py-2"
            >
              Baca
            </Link>
          </span>
        </div>

        {/* card */}
        <div className="md:h-[350px] md:w-[300px] h-[200px] w-[150px] rounded-md flex flex-col">
          <Image
            src={gambarDummy}
            className="md:h-[350px] h-[250px] object-cover rounded-lg"
            alt=""
            width={350}
            height={250}
          />
          <span className=" bg-[#fefefe] rounded-md p-2 flex flex-col">
            <h3 className="md:text-lg text-sm font-bold py-1">
              Sepulang Sekolah
            </h3>
            <p className="md:text-xs text-[8px] mb-2 text-center font-semibold bg-red-300 p-1 rounded-full w-2/4">
              Bullying Fisik
            </p>
            <p className="text-xs pb-2 text-slate-500">Kreator: Sella</p>
          </span>
          <span className="mx-2 bg-[#BFEEC5] w-full md:py-5 py-3 md:border-t-2 border-t-[1px] border-t-gray-300 rounded-md">
            <Link
              href="/artikel/budi-utomo"
              className="cursor-pointer md:text-sm text-xs font-bold md:px-8 px-4 ml-3 text-[#fefefe] bg-[#00AA13] w-2/4 rounded-full md:py-3 py-2"
            >
              Baca
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DaftarKomikBully;
