import React from "react";
import Layout from "@/widget/Layout";

const faqs = [
  {
    question: "Apa tujuan dari website ini?",
    answer:
      "Website ini bertujuan untuk memberikan edukasi mengenai perundungan (bullying) dan kekerasan seksual kepada peserta didik tingkat SMP, SMA, dan SMK melalui media komik yang menarik, mudah dipahami, dan relevan dengan kehidupan remaja.",
  },
  {
    question: "Siapa saja yang dapat membaca komik ini?",
    answer:
      "Komik ini ditujukan untuk peserta didik usia remaja, khususnya jenjang SMP, SMA, dan SMK. Namun, guru, orang tua, dan masyarakat umum juga dapat membacanya sebagai bahan edukasi dan diskusi.",
  },
  {
    question: "Apakah komik ini aman untuk dibaca oleh remaja?",
    answer:
      "Ya, seluruh komik disusun dengan pendekatan edukatif dan telah disesuaikan dengan usia remaja. Bahasa dan visual yang digunakan tetap sopan dan tidak mengandung unsur kekerasan eksplisit atau konten yang tidak pantas.",
  },
  {
    question: "Apakah komik ini bisa digunakan dalam kegiatan pembelajaran?",
    answer:
      "Tentu saja. Komik ini dapat digunakan sebagai media pendukung pembelajaran, terutama dalam penguatan pendidikan karakter, literasi digital, serta projek Penguatan Profil Pelajar Pancasila.",
  },
  {
    question: "Apakah komik dapat diunduh?",
    answer:
      "Beberapa judul komik tersedia dalam format PDF dan dapat diunduh secara gratis. Silakan kunjungi halaman masing-masing komik untuk informasi ketersediaan unduhan.",
  },
  {
    question:
      "Apa yang harus dilakukan jika mengalami atau mengetahui kasus bullying atau kekerasan seksual?",
    answer:
      "Jika Anda mengalami atau mengetahui kasus bullying atau kekerasan seksual, penting untuk segera melapor kepada guru, orang tua, atau pihak yang berwenang. Di website ini juga tersedia informasi kontak lembaga dan layanan resmi yang dapat membantu.",
  },
  {
    question: "Apakah saya bisa ikut berkontribusi membuat komik?",
    answer:
      "Bisa. Jika Anda memiliki kemampuan menggambar, menulis cerita, atau ingin menyampaikan ide terkait isu bullying dan kekerasan seksual, silakan hubungi tim kami melalui halaman kontak untuk informasi lebih lanjut mengenai kolaborasi.",
  },
  {
    question: "Apakah tersedia versi inklusif atau dalam bahasa daerah?",
    answer:
      "Kami sedang mengembangkan versi inklusif (misalnya: audio komik, narasi teks) serta versi dalam bahasa daerah agar konten ini dapat diakses oleh lebih banyak peserta didik dari berbagai latar belakang.",
  },
  {
    question: "Bagaimana cara saya ikut mendukung kampanye ini?",
    answer:
      "Anda dapat mendukung kampanye ini dengan cara membagikan komik ke media sosial, berdiskusi bersama teman-teman, mengikuti pelatihan atau kegiatan yang kami selenggarakan, serta menjadi bagian dari komunitas anti-bullying di sekolah Anda.",
  },
  {
    question: "Bagaimana cara menghubungi pengelola website ini?",
    answer:
      "Silakan kunjungi halaman Hubungi Kami untuk menyampaikan pertanyaan, saran, atau pesan lainnya. Kami sangat menghargai setiap masukan dari pembaca.",
  },
];

const faq = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col bg-[#fefefe] lg:px-32 md:px-10 md:py-5 lg:py-8 pt-10 py-1 lg:mt-5 flex-wrap mb-10">
        <h1 className=" text-xl md:text-2xl font-bold ml-5 md:ml-0">
          Frequent Asked Questions (FAQs)
        </h1>
        <span className="border-b-stone-200 border-b-[1px] w-32 h-3 mb-5 font-bold ml-5 md:ml-0"></span>
        <div className="flex justify-start items-start flex-col flex-wrap lg:justify-start gap-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-5 border border-gray-200"
            >
              <h2 className="text-lg font-semibold mb-2">
                {index + 1}. {faq.question}
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default faq;
