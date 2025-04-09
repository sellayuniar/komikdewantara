import React from "react";
import Layout from "@/widget/Layout";
import Carousel from "@/components/Carousel";
import Image from "next/image";
import { db } from "../../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";

const Cyberbullying = () => {
  const [komikCyberbullying, setKomikCyberbullying] = useState([]);
  const collectionRef = collection(db, "cyberbullying");

  useEffect(() => {
    const getKomikCyberbullying = async () => {
      const data = await getDocs(collectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setKomikCyberbullying(filteredData);
    };

    getKomikCyberbullying();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      <div className="w-full h-[900px] md:h-[1400px] lg:h-[1000px] flex flex-col bg-[#fefefe] lg:px-32 md:px-10 md:py-5 lg:py-8 pt-10 py-1 lg:mt-5 flex-wrap">
        <h1 className=" text-xl md:text-2xl font-bold ml-5 md:ml-0">
          Stop Cyberbullying
        </h1>
        <span className="border-b-stone-200 border-b-[1px] w-32 h-3 mb-5 font-bold ml-5 md:ml-0"></span>
        <div className="flex justify-center items-center h-[700px] md:h-[700px] lg:h-[500px] lg:w-[500px] mx-1 md:mx-0 mt-42">
          <Carousel autoSlide={false} className="hidden">
            {komikCyberbullying.map((s) => (
              <Image
                src={s.gambar}
                alt={s.judul}
                width={500}
                height={500}
                className="object-cover"
                key={s.id}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </Layout>
  );
};

export default Cyberbullying;
