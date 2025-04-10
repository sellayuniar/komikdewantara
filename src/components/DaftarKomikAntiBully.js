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
    <div className="w-full h-[900px] md:h-[1400px] lg:h-[650px] flex flex-col bg-[#fefefe] lg:px-32 md:px-10 md:py-5 lg:py-8 pt-10 py-1 lg:mt-5 flex-wrap">
      <h1 className=" text-xl md:text-2xl font-bold ml-5 md:ml-0">
        Komik Anti Bullying
      </h1>
      <span className="border-b-stone-200 border-b-[1px] w-32 h-3 mb-5 font-bold ml-5 md:ml-0"></span>
      <div className="flex justify-start items-start flex-row flex-wrap lg:justify-around h-[700px] md:h-[700px] lg:h-[500px] mx-1 md:mx-0">
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
