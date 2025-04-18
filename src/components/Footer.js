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
            <Image
              src={logo}
              width={100}
              height={100}
              alt="logo"
              className="object-cover w-[80px] h-[80px] md:h-[150px] md:w-[150px]"
            />
            <h2 className="font-bold text-[#006837]">KOMIK DEWANTARA</h2>
          </div>
          <h3 className="text-xs md:text-base">Supported By:</h3>
          <div className="flex gap-3">
            <Image
              src={logoUny}
              width={100}
              height={100}
              className="w-[60px] h-[60px] md:h-[100px] md:w-[100px]"
              alt="logo"
            />
            <Image
              src={logoPPG}
              width={150}
              height={100}
              alt="logo"
              className="object-cover w-[100px] h-[70px] md:h-[100px] md:w-[150px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold text-sm md:text-md">PROFILE</p>
          <Link href="/about-us" className="text-xs md:text-base">
            About Us
          </Link>
          <Link href="/legal" className="text-xs md:text-base">
            Legal Information
          </Link>
          <Link href="/team" className="text-xs md:text-base">
            Team
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold text-sm md:text-base">PUSAT BANTUAN</p>
          <Link href="/faq" className="text-xs md:text-base">
            FAQs
          </Link>
        </div>
        <div className="flex flex-col md:w-1/4 gap-3">
          <p className="font-bold text-sm md:text-base">KONTAK</p>
          <p className="text-xs md:text-base">
            Lokasi: Direktorat Pendidikan Profesi dan Kompetensi UNY Jalan
            Colombo Nomor 1 Yogyakarta 55281 Barat Daya Masjid Al-Mujjahidin UNY
          </p>
          <span className="flex gap-1 justify-start items-center">
            <Instagram size={20} />
            <a
              href="https://www.instagram.com/codeverse_a_uny/"
              target="_blank"
              className="text-xs md:text-base"
            >
              @codeverse_a_uny
            </a>
          </span>
        </div>
      </div>
      <div className="w-full flex justify-between border-t-[1px] border-[##00AA13]">
        <p className="text-xs md:text-base">
          © 2025 | Hak Cipta Di Lindungi oleh undang - undang
        </p>
        <p className="text-xs md:text-base">Created with love by Team A2_207</p>
      </div>
    </section>
  );
}
