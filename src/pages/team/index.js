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
      <div className="w-full flex flex-col bg-[#fefefe] lg:px-32 px-10 md:py-5 lg:py-8 pt-10 py-1 lg:mt-5 mb-10 md:h-[2000px] xl:h-[2300px]">
        <div className="flex justify-between flex-col md:flex-row gap-5">
          <div className="md:w-1/5 items-center justify-center">
            <Image
              src="https://lh3.googleusercontent.com/fife/ALs6j_GXv0i4kthTIRk0HAgl0FfHnztbiiMpYDWYGqQpSRYL5GhZSW1ltUf8djpdS9zrKBcIvME5WjA91t07w-tcosLAWf4k9xL8Zi4XLDDuB1IT8kzDnxFQtLtLmw-3ZNp9fL9tCYOag5xLWILHetftsUnM8M4S7SNYyb-krfHe08lNOA7h2zXGTidmXEGwBML4CALH3crCptZ6mfuRwmBWIR_9Utw8ThhtM8atkrYU4COe6qG2VsqXA0VKfk7DSGYEF0YTla2rCrjKIV8VS7pHpF448TMWwszJTNBiiuhgVeDCiDfdP4L9H2QzGZZcbhvXke6ORlLEl_xhCWa5mJNhysu0RtSFdJCIBwthHB5m-bnycQS51nmV7i7QQaFIKfB3usCTQFBfCKqfK3eYv9tC8m-nlaPjOz1E3LxwHNZBJPF5gSrtX0y1x2dHfOc7nXKbEyNUIXMBt69N2ZnMa4bZsRvxxdmq4-ZCP9LANMdKXPunH4KO1VwRjMIFsMNM1gbRX-bRXalA0uaD6dEIy0m9BJUqjPwQ3gQhAaw4o_Qw-kT_Zjf2Hp_t-5Ah1FUuEM1N6-otgveECeDJ0JJQNHzuYaegoYsqOCowWfto0xihBKfSXu22pnzUNcRym__aN3HL6E46BP-DYmamR7dH7ZDMBROsgSkWGjUQlx_1HoO6LHaVDGuoT_NEduyTW6wW7aVzY5dkPVDTtJXfJFML7tFARi1dvh4KbdzeTkf_ejjd6mazS6Vqqq_Ijc9JK3B5ItaMuFaDKTUiaUFMb8fItGSTQ9cq-paP9LOWTIgquYMTEnB57VFGMlN3JjNy59hFwljkdP_-2zS3VAf8ZZavebnrCb3AGO_OaHbCDP6LqKlrheg5FuweRRvcY-XA3YU4Xfy_M15SU7Fu3mBNvBsbpmZdRRL3qC3IdnwButnrzDRamylDhyKjoeYYCOXHKl18vbr4DE3JV_sq-SSFzqhf8VjDsXukezWfoyxcHCcNuB7gH2T40vT3H1jHMp_XX9AqLpy19hcAtZxmxX4VIJ368J_7n0osaxUE32MXbeuETtk8RFVN2DSrb8_3CJjI1X_LSFSLv-m9Avh4UGz0vlA2ucgrH1rNZegprKGBjp3Ji59sAzBNRhqxTJxh2767kmxRUkkvHIicSOWdfelZyTtoDykzBdu6YK0kk-smeTm3xsXrV44U6vYog1jaT9lv_32OxAYfbKRIwbjc2rebT4VPw4-SOeXovWGAzcxTJNslhIvJTnFWGiGsLchiuPcaoeovBdYP_wGc0qbMKkVwsPT0IDdU5CQrejiZOR7O766chwd9E1RRzD3T9hQRtdY6NU1cOPmaJ9dN6iLvO9nx-oqnT9DWXKHQYBFOC2E3w-fyDcQYgdQX9UhweVXdMZflgszUWsFbJ0ffMMKl7phxyMuEyz81REoT6-cbKPdcwqOivtRC4sPu4hh9quYgDOqxT_NQaHSBr-jFNMhZKVsfJLLgE0gy--jojVDDM0QxjoQx7UpXPYab7tcFvHaBOM-Medv6KrPZbNctoB390kMbkPx1Atj_0K0qsjw5Xyn9RyyHawc2LA2N-8awJJrxZAraSfnA5gGkHjuYMZrJ_a6t_yxQLWp9JQXNakTsdfplOzq8505GIshQWxnkiVMkEMLXCFGPYVVkBDw-CMvcvnWX98ORMu3KWoVUbHLj4g=w2000-h1846?auditContext=forDisplay"
              width={250}
              height={250}
              alt="foto"
              className="rounded-xl md:h-[150px] md:w-[150px] h-[150px] w-[150px]"
            />
          </div>
          <div className="flex flex-col md:w-4/5 gap-3">
            <h4 className="md:text-xl text-base font-bold">Dosen Pengampu</h4>
            <h3 className="md:text-xl text-sm font-bold">
              Drs. Muhammad Munir, M.Pd
            </h3>

            <div className="flex flex-col gap-2 mt-3 text-xs md:text-base">
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
        <div className="flex flex-col my-20">
          <h1 className=" text-base md:text-2xl font-bold ml-5 md:ml-0">
            Team Member
          </h1>
          <span className="border-b-stone-200 border-b-[1px] w-32 h-3 mb-10 font-bold ml-5 md:ml-0"></span>
          <div className="flex flex-wrap gap-3 gap-y-5 justify-between px-3">
            {daftarTeamMember.map((data) => (
              <div className="flex flex-col gap-2" key={data.id}>
                <Image
                  src={data.gambar}
                  width={250}
                  height={250}
                  alt="foto"
                  className="rounded-md w-[100px] h-[100px] md:w-[200px] md:h-[200px] xl:w-[300px] xl:h-[300px]"
                />
                <p className="font-bold text-xs md:text-base">{data.jabatan}</p>
                <p className="text-xs md:text-base">{data.nama}</p>

                <p className="flex gap-1 items-center">
                  <Instagram size={15} />
                  <a
                    href={data.instagram}
                    className="text-blue-500 hover:text-[#006837] text-xs md:text-base"
                  >
                    @{data.username}
                  </a>
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
