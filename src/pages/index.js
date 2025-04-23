import DaftarKomikAntiBully from "@/components/DaftarKomikAntiBully";
import DaftarKomikAntiPelecehan from "@/components/DaftarKomikAntiPelecehan";
import Hero from "@/components/Hero";
import Layout from "@/widget/Layout";
import TentangPlatform from "@/components/TentangPlatform";
import DaftarKomikKPAI from "@/components/DaftarKomikKpai";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <DaftarKomikAntiBully />
      <DaftarKomikAntiPelecehan />
      <DaftarKomikKPAI />
      <TentangPlatform />
    </Layout>
  );
}
