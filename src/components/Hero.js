import Image from "next/image";
import Carousel from "./Carousel";
import { v4 as uuidv4 } from "uuid";
import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { ChevronRight } from "react-feather";
import Link from "next/link";

export default function Hero() {
  const [dataBanner, setDataBanner] = useState([]);
  const collectionRef = collection(db, "banner");

  useEffect(() => {
    const getDataBanner = async () => {
      const data = await getDocs(collectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDataBanner(filteredData);
    };

    getDataBanner();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="relative lg:h-[600px] md:h-[300px] h-[250px] w-full pb-20 md:mb-54 lg:mb-10 xl:mb-72">
      <div className="block">
        <Carousel autoSlide={false} autoSlideInterval={5000}>
          {dataBanner.map((s) => (
            <Image
              src={s.gambar}
              alt={s.judul}
              className="object-fit w-full"
              width={1920}
              height={1080}
              key={uuidv4()}
            />
          ))}
        </Carousel>
        <div className="flex absolute items-center  bg-[#BFEEC5]/80 rounded-full p-1 drop-shadow-xl right-3 bottom-12 lg:bottom-18 lg:right-32 md:-bottom-25 xl:-bottom-28">
          <h3 className="md:text-2xl font-bold text-sm mx-5">BACA KOMIK</h3>
          <Link
            href="/daftar-komik"
            className="p-1 rounded-full shadow bg-[#00AA13] text-white hover:bg-[#00AA13]/80"
          >
            <ChevronRight className="md:w-10 md:h-10 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
