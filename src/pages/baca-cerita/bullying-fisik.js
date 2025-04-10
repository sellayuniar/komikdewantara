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

const BullyingFisik = () => {
  const [komikBullyingFisik, setKomikBullyingFisik] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "bullying-fisik"),
      where("id", ">", 0),
      orderBy("id")
    );
    onSnapshot(q, (snapshot) => {
      setKomikBullyingFisik(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  return (
    <Layout>
      <div className="w-full h-[300px] md:h-[700px] flex flex-col justify-center items-center bg-[#fefefe] lg:px-32 md:px-10 mt-10 md:mt-10 mb-20 md:mb-40 md:my-5">
        <h1 className=" text-md md:text-2xl font-bold">Bullying Fisik</h1>
        <span className="border-b-stone-200 border-b-[1px] w-32 h-3 mb-5 font-bold md:mb-10"></span>
        <div className="flex justify-center items-center h-[300px] w-[300px] md:h-[600px] md:w-[600px] md:mx-0">
          <Carousel autoSlide={false}>
            {komikBullyingFisik.map((s) => (
              <Image
                src={s.gambar}
                alt={s.judul}
                width={600}
                height={600}
                className="object-fit rounded-md h-[300px] w-[300px] md:h-[600px] md:w-[600px]"
                key={s.id}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </Layout>
  );
};

export default BullyingFisik;
