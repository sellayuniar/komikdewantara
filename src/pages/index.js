import DaftarKomikAntiBully from "@/components/DaftarKomikAntiBully";
import DaftarKomikAntiPelecehan from "@/components/DaftarKomikAntiPelecehan";
import Hero from "@/components/Hero";
import Layout from "@/widget/Layout";
import TentangPlatform from "@/components/TentangPlatform";
import DaftarKomikKPAI from "@/components/DaftarKomikKpai";
import Dokumentasi from "@/components/Dokumentasi";
import DaftarPoster from "@/components/Poster";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <DaftarKomikAntiBully />
      <DaftarKomikAntiPelecehan />
      <DaftarKomikKPAI />
      <Dokumentasi />
      <DaftarPoster />
      <TentangPlatform />
    </Layout>
  );
}
