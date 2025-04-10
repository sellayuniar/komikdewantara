import DaftarKomikAntiBully from "@/components/DaftarKomikAntiBully";
import DaftarKomikAntiPelecehan from "@/components/DaftarKomikAntiPelecehan";
import Layout from "@/widget/Layout";
import React from "react";

const index = (props) => {
  return (
    <Layout>
      <div className="flex flex-col mb-20">
        <DaftarKomikAntiBully />
        <DaftarKomikAntiPelecehan />
      </div>
    </Layout>
  );
};

index.propTypes = {};

export default index;
