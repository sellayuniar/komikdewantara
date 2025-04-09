import logo from "../../public/logo_only.ico";
import logoUny from "../../public/logo_uny.png";
import logoPPG from "../../public/logo_ppg.png";
import { Instagram, Facebook, Youtube, Linkedin } from "react-feather";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <section className="w-full px-5 py-5 gap-2 flex flex-col justify-between items-center bg-[#EFF0F2]">
      <div className="flex md:flex-row flex-col justify-between items-start gap-5 mb-10 w-full">
        <div className="flex flex-col">
          <div className="flex justify-center items-center">
            <Image src={logo} width={100} height={100} alt="logo" />
            <h2>KOMIK DEWANTARA</h2>
          </div>
          <h3>Supported By:</h3>
          <div className="flex gap-3">
            <Image
              src={logoUny}
              width={100}
              height={100}
              className=""
              alt="logo"
            />
            <Image
              src={logoPPG}
              width={150}
              height={100}
              alt="logo"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-bold">PROFILE</p>
          <Link href="/about-us">About Us</Link>
          <Link href="/legal">Legal Information</Link>
          <Link href="/team">Team</Link>
        </div>
        <div className="flex flex-col">
          <p className="font-bold">PUSAT BANTUAN</p>
          <Link href="/faq">FAQs</Link>
        </div>
        <div className="flex flex-col md:w-1/4">
          <p className="font-bold">KONTAK</p>
          <p></p>
          <p></p>
          <p>
            Lokasi: Direktorat Pendidikan Profesi dan Kompetensi UNY Jalan
            Colombo Nomor 1 Yogyakarta 55281 Barat Daya Masjid Al-Mujjahidin UNY
          </p>
          <span className="flex gap-1 justify-start items-center">
            <Instagram size={20} />
            <a href="">@informatikaA</a>
          </span>
        </div>
      </div>
      <div className="w-full flex justify-between border-t-[1px] border-[##00AA13]">
        <p>© 2025 | Hak Cipta Di Lindungi oleh undang - undang</p>
        <p>Created with love by Team A2_207</p>
      </div>
    </section>
  );
}
