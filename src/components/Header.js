import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import logo from "../../public/logo_only.ico";

export default function Header() {
  return (
    <>
      <Head>
        <title>Komik Dewantara</title>
        <link rel="shortcut icon" href="/logo_only.ico" />
      </Head>

      <nav className="w-full h-[70px] lg:h-24 flex bg-[#fefefe] lg:px-32 md:px-10 md:py-5 py-1 items-center justify-between">
        <div className="mr-32">
          <Link href="/" className="flex items-center cursor-pointer">
            <div>
              <Image
                src={logo}
                alt="logo"
                className="lg:w-[100px] lg:h-[100px] h-[60px] w-[60px] "
              />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="lg:text-2xl md:text-xl text-sm font-bold">
                Komik Dewantara
              </h1>
              {/* <h3 className="lg:text-sm text-xs font-bold">
              Anti Bullying dan Kekerasan Seksual
            </h3> */}
            </div>
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center justify-between">
            <li>
              <Link
                href="/"
                className="text-lg font-bold py-2 pl-3 pr-4 cursor-pointer hover:text-[#625004]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#sejarah"
                className="text-lg font-bold py-2 pl-3 pr-4 cursor-pointer hover:text-[#625004]"
              >
                Daftar Komik
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
