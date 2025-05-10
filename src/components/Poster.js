import React from "react";
import { db } from "../../config/firebase";
import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import CardPoster from "./CardPoster";

const DaftarPoster = () => {
  const [daftarPoster, setDaftarPoster] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "poster"),
      where("id", ">", 0),
      orderBy("id")
    );
    onSnapshot(q, (snapshot) => {
      setDaftarPoster(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  return (
    <div className="w-full h-[2000px] md:h-[2400px] xl:h-[900px] flex flex-col md:justify-start md:items-start justify-start items-center bg-[#fefefe] lg:px-44 xl:px-32 md:px-10 md:py-5 lg:py-8 pt-10 py-1  md:mt-10 mb-10 md:mb-0 xl:mt-10">
      <h1 className="text-md md:text-2xl font-bold ml-5 md:ml-0">
        Pemenang Lomba Poster
      </h1>
      <span className="border-b-stone-200 border-b-[1px] w-32 h-3 mb-10 lg:mb-12 xl:mb-5 font-bold ml-5 mt-3 md:ml-0"></span>
      <div className="flex items-center flex-col xl:flex-row xl:justify-around h-[1800px] md:h-[1800px] xl:h-[600px] mx-1 md:mx-0 gap-5 md:-mt-0 gap-y-5 md:gap-y-32 mb-16 w-full">
        {daftarPoster.map((data) => (
          <CardPoster
            gambar={data.gambar}
            judul={data.judul}
            juara={data.juara}
            nama={data.nama}
            key={data.id}
            kelas={data.kelas}
          />
        ))}
      </div>
    </div>
  );
};

export default DaftarPoster;
