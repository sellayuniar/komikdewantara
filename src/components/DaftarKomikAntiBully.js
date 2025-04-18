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
import CardKomik from "./CardKomik";

const DaftarKomikAntiBully = () => {
  const [daftarKomikAntiBullying, setDaftarKomikAntiBullying] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "daftar-komik-anti-bullying"),
      where("id", ">", 0),
      orderBy("id")
    );
    onSnapshot(q, (snapshot) => {
      setDaftarKomikAntiBullying(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  return (
    <div className="w-full h-[1500px] md:h-[1200px] lg:h-[1250px] xl:h-[700px] flex flex-col md:justify-start md:items-start justify-start items-center bg-[#fefefe] lg:px-44 xl:px-32 md:px-10 md:py-5 lg:py-8 pt-10 py-1 flex-wrap md:mt-10 mb-10 md:mb-0">
      <h1 className="text-md md:text-2xl font-bold ml-5 md:ml-0">
        Komik Anti Bullying
      </h1>
      <span className="border-b-stone-200 border-b-[1px] w-32 h-3 mb-5 lg:mb-12 xl:mb-5 font-bold ml-5 md:ml-0"></span>
      <div className="flex md:justify-between md:items-start justify-center items-center flex-row flex-wrap xl:justify-around h-[1400px] md:h-[1000px] xl:h-[500px] mx-1 md:mx-0 gap-3 -mt-[70px] md:-mt-0 gap-y-5 md:gap-y-20 mb-16 w-full">
        {daftarKomikAntiBullying.map((data) => (
          <CardKomik
            cover={data.cover}
            judul={data.judul}
            kategori={data.kategori}
            link={data.link}
            key={data.id}
            kreator={data.kreator}
          />
        ))}
      </div>
    </div>
  );
};

export default DaftarKomikAntiBully;
