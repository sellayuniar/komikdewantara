import React from "react";
import Link from "next/link";
import Image from "next/image";

const CardKomik = ({ cover, judul, kategori, link, kreator }) => {
  return (
    <div className="md:h-[500px] md:w-[300px] h-[200px] w-[150px] rounded-md flex flex-col">
      <Image
        src={cover}
        className="md:h-[400px] h-[300px] object-fit rounded-lg"
        alt=""
        width={300}
        height={400}
      />
      <span className=" bg-[#fefefe] rounded-md p-2 flex flex-col">
        <h3 className="md:text-lg text-sm font-bold py-1">{judul}</h3>
        <p className="md:text-xs text-[8px] mb-2 text-center font-semibold bg-red-300 p-1 rounded-full w-fit px-2">
          {kategori}
        </p>
        <div className="flex flex-col">
          <p className="text-xs pb-2 text-slate-500">Kreator:</p>
          <p className="text-xs pb-2 text-slate-500">{kreator}</p>
        </div>
      </span>
      <span className="mx-2 bg-[#BFEEC5] w-full md:py-5 py-3 md:border-t-2 border-t-[1px] border-t-gray-300 rounded-md">
        <Link
          href={`/baca-cerita/${link}`}
          className="cursor-pointer md:text-sm text-xs font-bold md:px-8 px-4 ml-3 text-[#fefefe] bg-[#00AA13] w-2/4 rounded-full md:py-3 py-2"
        >
          Baca
        </Link>
      </span>
    </div>
  );
};

export default CardKomik;
