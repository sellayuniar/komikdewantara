import React from "react";
import Layout from "@/widget/Layout";
import LogoFull from "../../../public/logo_komik.ico";
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
import { Instagram } from "react-feather";

const Team = () => {
  const [daftarTeamMember, setDaftarTeamMember] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "team"), where("id", ">", 0), orderBy("id"));
    onSnapshot(q, (snapshot) => {
      setDaftarTeamMember(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  return (
    <Layout>
      <div className="w-full flex flex-col bg-[#fefefe] lg:px-32 md:px-10 md:py-5 lg:py-8 pt-10 py-1 lg:mt-5 mb-10">
        <div className="flex justify-between gap-5">
          <Image
            src={LogoFull}
            width={350}
            height={350}
            alt="foto"
            className="w-2/5"
          />
          <div className="flex flex-col w-3/5 gap-3">
            <h4 className="text-xl font-bold">Dosen Pembimbing</h4>
            <h3 className="text-xl font-bold">Drs. Muhammad Munir, M.Pd</h3>

            <div className="flex flex-col gap-2 mt-3">
              <p>
                Saya memberikan apresiasi yang tinggi terhadap pelaksanaan
                proyek kepemimpinan yang mengangkat tema Sosialisasi
                Anti-Bullying dan Kekerasan Seksual melalui Website E-Comic
                sebagai Upaya Pencegahan di Kalangan Remaja. Proyek ini
                menunjukkan inisiatif dan kreativitas yang sangat baik,
                khususnya dalam pemilihan media yang sesuai dengan karakteristik
                remaja masa kini.
              </p>
              <p>
                Penggunaan website E-Comic sebagai sarana sosialisasi merupakan
                pendekatan yang inovatif dan menarik, serta mampu menyampaikan
                pesan edukatif dengan cara yang lebih mudah dipahami dan
                diterima oleh peserta didik. Selain itu, keterlibatan aktif
                peserta dalam proses pelaksanaan kegiatan juga mencerminkan
                kemampuan kepemimpinan yang kolaboratif dan responsif terhadap
                isu sosial di lingkungan sekitar.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-10">
          <h1 className=" text-xl md:text-2xl font-bold ml-5 md:ml-0">
            Team Member
          </h1>
          <span className="border-b-stone-200 border-b-[1px] w-32 h-3 mb-5 font-bold ml-5 md:ml-0"></span>
          <div className="flex">
            {daftarTeamMember.map((data) => (
              <div className="flex flex-col" key={data.id}>
                <Image
                  src={data.gambar}
                  width={250}
                  height={250}
                  alt="foto"
                  className="rounded-md"
                />
                <p>{data.jabatan}</p>
                <p>{data.nama}</p>
                <p>NIM: {data.nim}</p>
                <p className="flex gap-2 items-center">
                  <Instagram size={20} />
                  <a href={data.instagram}>@{data.username}</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;
