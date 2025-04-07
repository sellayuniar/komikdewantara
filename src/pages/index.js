import DaftarKomikAntiBully from "@/components/DaftarKomikAntiBully";
import DaftarKomikAntiPelecehan from "@/components/DaftarKomikAntiPelecehan";
import Hero from "@/components/Hero";
import Layout from "@/widget/Layout";
import TentangPlatform from "@/components/TentangPlatform";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <DaftarKomikAntiBully />
      <DaftarKomikAntiPelecehan />
      <TentangPlatform />
    </Layout>
  );
}
