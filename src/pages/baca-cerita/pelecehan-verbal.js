import React from "react";
import Layout from "@/widget/Layout";
import Carousel from "@/components/Carousel";
import Image from "next/image";
import { db } from "../../../config/firebase";
import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { useState, useEffect } from "react";

const AntiPelecehanVerbal = () => {
  const [komikAntiPelecehanVerbal, setKomikAntiPelecehanVerbal] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "pelecehan-verbal"),
      where("id", ">", 0),
      orderBy("id")
    );
    onSnapshot(q, (snapshot) => {
      setKomikAntiPelecehanVerbal(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  return (
    <Layout>
      <div className="w-full h-[500px] md:h-[1000px] flex flex-col items-center bg-[#fefefe] lg:px-32 md:px-10 mt-10 mb-20 md:my-5">
        <h1 className=" text-md md:text-2xl font-bold">
          Pelecehan Seksual Verbal
        </h1>
        <span className="border-b-stone-200 border-b-[1px] w-32 h-3 mb-5 font-bold md:mb-10"></span>
        <div className="flex justify-center items-center h-[300px] w-[300px] md:h-[500px] md:w-[500px] md:mx-0">
          <Carousel autoSlide={false}>
            {komikAntiPelecehanVerbal.map((s) => (
              <Image
                src={s.gambar}
                alt={s.judul}
                width={600}
                height={600}
                className="object-fit rounded-md h-[300px] w-[300px] md:h-[500px] md:w-[500px]"
                key={s.id}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </Layout>
  );
};

export default AntiPelecehanVerbal;
