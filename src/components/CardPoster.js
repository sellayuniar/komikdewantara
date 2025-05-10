import React from "react";
import Image from "next/image";

const CardPoster = ({ gambar, judul, juara, kelas, nama }) => {
  return (
    <div className="md:h-[600px] md:w-[400px] h-[600px] w-[300px] rounded-md flex flex-col">
      <Image
        src={gambar}
        className="md:h-[620px] md:w-[400px] h-[500px] w-[300px] object-cover rounded-lg"
        alt={judul}
        width={620}
        height={400}
      />
      <span className=" bg-[#fefefe] rounded-md p-2 flex flex-col">
        <h3 className="md:text-lg text-sm font-bold py-1">{juara}</h3>
        <div className="flex flex-col">
          <p className="md:text-base  text-sm pb-2 text-slate-500">{nama}</p>
          <p className="md:text-base text-sm pb-2 text-slate-500">
            Kelas: {kelas}
          </p>
        </div>
      </span>
    </div>
  );
};

export default CardPoster;
