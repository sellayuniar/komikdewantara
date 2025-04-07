import Image from "next/image";
import Carousel from "./Carousel";
import { v4 as uuidv4 } from "uuid";

const slides = [
  "https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/thumb_landscape%2Fkelinci_kura_1.png?alt=media&token=083af96a-ec46-4e6d-a367-f73341b08f00",
  "https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/thumb_landscape%2Fkelinci_kura_1.png?alt=media&token=083af96a-ec46-4e6d-a367-f73341b08f00",
  "https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/thumb_landscape%2Fkelinci_kura_1.png?alt=media&token=083af96a-ec46-4e6d-a367-f73341b08f00",
];

export default function Hero() {
  return (
    <section className="lg:h-[800px] md:h-[300px] h-[200px] w-full">
      <Carousel autoSlide={true} autoSlideInterval={8000}>
        {slides.map((s) => (
          <Image src={s} alt="" width={1440} height={1440} key={uuidv4()} />
        ))}
      </Carousel>
    </section>
  );
}
