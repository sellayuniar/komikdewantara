import React from "react";
import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import CardKomik from "./CardKomik";

const DaftarKomikAntiBully = () => {
  const [daftarKomikAntiPelecehan, setDaftarKomikAntiPelecehan] = useState([]);
  const collectionRef = collection(db, "daftar-komik-anti-pelecehan-seksual");

  useEffect(() => {
    const getDaftarKomikAntiPelecehan = async () => {
      const data = await getDocs(collectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDaftarKomikAntiPelecehan(filteredData);
    };

    getDaftarKomikAntiPelecehan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-[900px] md:h-[1400px] lg:h-[650px] flex flex-col bg-[#fefefe] lg:px-32 md:px-10 md:py-5 lg:py-8 pt-10 py-1 lg:mt-10 flex-wrap">
      <h1 className=" text-xl md:text-2xl font-bold ml-5 md:ml-0">
        Komik Anti Bullying
      </h1>
      <span className="border-b-stone-200 border-b-[1px] w-32 h-3 mb-5 font-bold ml-5 md:ml-0"></span>
      <div className="flex justify-start items-start flex-row flex-wrap lg:justify-around h-[700px] md:h-[1200px] lg:h-[400px] mx-1 md:mx-0">
        {daftarKomikAntiPelecehan.map((data) => (
          <CardKomik
            cover={data.cover}
            judul={data.judul}
            kategori={data.kategori}
            link={data.link}
            key={data.id}
          />
        ))}
      </div>
    </div>
  );
};

export default DaftarKomikAntiBully;
