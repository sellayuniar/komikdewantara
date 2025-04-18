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

const DaftarKomikAntiPelecehan = () => {
  const [daftarKomikAntiPelecehan, setDaftarKomikAntiPelecehan] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "daftar-komik-anti-pelecehan-seksual"),
      where("id", ">", 0),
      orderBy("id")
    );
    onSnapshot(q, (snapshot) => {
      setDaftarKomikAntiPelecehan(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  return (
    <div className="w-full h-fit lg:h-[700px] flex flex-col md:justify-start md:items-start justify-center items-center bg-[#fefefe] lg:px-32 md:px-10 md:py-5 py-1 flex-wrap mb-20 md:mt-10 lg:mt-0">
      <h1 className="text-md md:text-2xl font-bold ml-5 md:ml-0">
        Komik Anti Pelecehan Seksual
      </h1>
      <span className="border-b-stone-200 border-b-[1px] w-32 h-3 mb-5 font-bold ml-5 md:ml-0"></span>
      <div className="flex md:justify-between md:items-start justify-center items-center flex-row flex-wrap lg:justify-around h-[1400px] md:h-[1000px] lg:h-[500px] mx-1 md:mx-0 gap-3 -mt-[60px] md:-mt-0 gap-y-5 md:gap-y-10 mb-16 w-full">
        {daftarKomikAntiPelecehan.map((data) => (
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

export default DaftarKomikAntiPelecehan;
