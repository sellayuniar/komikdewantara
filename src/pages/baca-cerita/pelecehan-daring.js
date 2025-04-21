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

const AntiPelecehanDaring = () => {
  const [komikAntiPelecehanDaring, setKomikAntiPelecehanDaring] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "pelecehan-digital"),
      where("id", ">", 0),
      orderBy("id")
    );
    onSnapshot(q, (snapshot) => {
      setKomikAntiPelecehanDaring(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  return (
    <Layout>
      <div className="w-full h-[500px] md:h-[1000px] flex flex-col items-center bg-[#fefefe] lg:px-32 md:px-10 mt-10 mb-20 md:my-5">
        <h1 className=" text-md md:text-2xl font-bold">
          Pelecehan Seksual Online
        </h1>
        <span className="border-b-stone-200 border-b-[1px] w-32 h-3 font-bold mb-10"></span>
        <div className="flex justify-center items-center h-[350px] w-[350px] md:h-[500px] md:w-[500px] md:mx-0">
          <Carousel autoSlide={false}>
            {komikAntiPelecehanDaring.map((s) => (
              <Image
                src={s.gambar}
                alt={s.judul}
                width={600}
                height={600}
                className="object-fit rounded-md h-[350px] w-[350px] md:h-[500px] md:w-[500px]"
                key={s.id}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </Layout>
  );
};

export default AntiPelecehanDaring;
