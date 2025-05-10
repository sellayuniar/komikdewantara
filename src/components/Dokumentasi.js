import Carousel from "./Carousel";
import { db } from "../../config/firebase";
import {
  query,
  where,
  orderBy,
  onSnapshot,
  collection,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Dokumentasi() {
  const [fotoArtikel, setFotoArtikel] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "dokumentasi-seminar"),
      where("id", ">", 0),
      orderBy("id")
    );
    onSnapshot(q, (snapshot) => {
      setFotoArtikel(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  return (
    <section className="w-full h-[500px] md:h-[900px] flex flex-col md:justify-start md:items-start justify-center items-center bg-[#fefefe] lg:px-44 xl:px-32 md:px-10 md:py-5 lg:py-8 pt-0 md:pt-10 py-1 flex-wrap md:mt-10 mb-10 md:mb-0 -mt-10">
      <h1 className="text-md md:text-2xl font-bold ml-5 md:ml-0 text-center md:text-left">
        Pelaksanaan Seminar Anti-Bullying dan Anti Kekerasan Seksual
      </h1>
      <span className="border-b-stone-200 border-b-[1px] w-32 h-3 mb-5 lg:mb-0 xl:mb-5 font-bold ml-5 md:ml-0"></span>

      <div className="flex flex-col items-center justify-center mt-5 w-full rounded-xl">
        <div className="w-[300px] md:w-[500px] md:h-[500px]">
          <Carousel autoSlide={false} autoSlideInterval={5000}>
            {fotoArtikel.map((s) => (
              <Image
                src={s.gambar}
                alt={s.judul}
                className="object-fit w-full rounded-xl"
                width={600}
                height={600}
                key={s.id}
              />
            ))}
          </Carousel>
        </div>
        <div className="mt-5">
          <a
            href="https://www.instagram.com/p/DI4NxZOyAra"
            className="text-sm md:text-base hover:text-blue-500"
            target="_blank"
          >
            Sumber: Instagram Satriatama_media
          </a>
        </div>
      </div>
    </section>
  );
}
