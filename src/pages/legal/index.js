import Layout from "@/widget/Layout";
import React from "react";

const legal = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col bg-[#fefefe] lg:px-32 px-10 mb-44 md:py-5 lg:py-8 pt-10 py-1 lg:mt-5 flex-wrap justify-center items-center md:justify-start">
        <h1 className=" text-base md:text-2xl font-bold ml-5 md:ml-0">
          Legal Information
        </h1>
        <span className="border-b-stone-200 border-b-[1px] w-32 h-3 mb-10 font-bold ml-5 md:ml-0"></span>
        <div className="flex justify-start items-start flex-col flex-wrap text-sm md:text-base lg:justify-start gap-5">
          <div>
            <b>Landasan Hukum :</b>
            <ol type="1" className="list-disc list-inside">
              <li>UU Hak Cipta No.28 Tahun 2014</li>
              <li>
                PP No.56 Tahun 2021 Tentang Pengelolaan Loyalti Hak Cipta Lagu /
                Musik
              </li>
            </ol>
          </div>

          <div>
            <b>Informasi Konten : </b>
            <ol type="1" className="list-disc list-inside">
              <li>
                Sumber informasi terkait konten tercantum sebagai landasan /
                dasar hukum dalam sebuah klaim ataupun pengakuan suatu produk
                dalam lindungan Undang - Undang.
              </li>
              <li>
                Himpunan data yang digunakan dan sumber data serta berbagai
                macam jenis data yang terdapat dalam situs ini merupakan bahan
                atau konten yang dilindungi oleh undang - undang secara hukum.
              </li>
            </ol>
          </div>

          <div>
            <p>
              <b>Credits :</b>
            </p>
            <b>Team A2_207</b>
            <ul className="list-disc list-inside">
              <li>Design</li>
              <li>Element gambar</li>
              <li>Jenis / Tata Letak</li>
              <li>Gambaran Utuh</li>
            </ul>
          </div>
          <div>
            <b>
              <a
                href="https://www.pixton.com/welcome"
                target="_blank"
                rel="noreferrer"
              >
                Pixton
              </a>
            </b>
            <ul className="list-disc list-inside">
              <li>Component</li>
              <li>Element</li>
              <li>Icon</li>
              <li>Vektor</li>
              <li>Ilustration</li>
            </ul>
          </div>
          <div>
            <b>Design</b>
            <ul className="list-disc list-inside">
              <li>Canva Design</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default legal;
