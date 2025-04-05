import Image from "next/image";
export default function Hero() {
  return (
    <section className="lg:h-[592px] md:h-[300px] h-[200px] w-full">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/thumb_landscape%2Fkelinci_kura_1.png?alt=media&token=083af96a-ec46-4e6d-a367-f73341b08f00"
        className="lg:h-[592px] md:h-[300px] h-[200px]"
        alt=""
        width={1440}
        height={1200}
      />
    </section>
  );
}
