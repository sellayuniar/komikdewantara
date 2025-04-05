import DaftarKomikBully from "@/components/DaftarKomikBully";
import Hero from "@/components/Hero";
import Layout from "@/widget/Layout";
import TentangPlatform from "@/components/TentangPlatform";
import Head from "next/head";
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Komik Dewantara</title>
      </Head>
      <Hero />
      <DaftarKomikBully />
      <TentangPlatform />
    </Layout>
  );
}
