import React from "react";
import Layout from "@/widget/Layout";
import Carousel from "@/components/Carousel";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

const slides = [
  "https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/thumb_landscape%2Fkelinci_kura_1.png?alt=media&token=083af96a-ec46-4e6d-a367-f73341b08f00",
  "https://lh3.googleusercontent.com/fife/ALs6j_Eu_Os9lvZsV4aV2aXI_pBf4_UCKWym45WvAiYh6AP4CSvZw8QTNHSYTtIekPTc_oECXvKLqfe931NC52q_H6AnMyOBRzLjWzijPa_krf4de7bPh7aCHh2WSnOBUXZd1zQWW2bjbdrrGWisMw9bjN674j4an-n31MEL4LozYug9dovtbmvfrG0NDdJSfV1LxmKMCgS1axnVB2Wh3315UXDg-dQAbQKFrPqM9QQG4EYyF0ZsBTovQ0K6hRcYHaUg5dlWItn4Pt64cxnPEgDHgDkFyAsGuF0oArFxyHC7bW0S7m9jP-IXs6nyNLWbDPnnhyYoNcgSVQOQakJg6r-zTVMKw7leZ4tYMUyeuF14Ow-a7YzadHQ_ugmBM1msq4dqcY7sOuQ7gWNYJGn3cmD9Ab3RB_CoRYcqrI4AnaTmzZbby9iRXXt-vPOA5QLpo2Dv7i95YHkGlbN3h7D2KP_ruVIpS7UxhG96_fvDRexAr7orv8Agdwwd2IkEjWJ3CqAvH9HnJUn48oQl7I92FEHfhZdz3-McRjk5XDkwN4Ke5Bjk8xtWnkoXaAHunYPtHze8Vc7Nw0M-4iCvP9rFthCWUV_E6Vn94qgh0h4i6IHmShYpneBHqa38FRBO_ufDLTCA_apjAqiIUC0oUIsM1MvLODjrM4C3_G4qXY5pmjnQH11y3FCRxD8jDOYjualodTdzYzPuCPvmKqCrkFPi5QEkuuUQ07qtvdmiU-mAuppG2lpU-WQ4aLUeEKZUxgnbD9C2Ltzrj-VnssTBYgsVLjdH2WzsrkvXDrtYVWy58GxxVOd4H7X9zvRZ-ClAXlpYZGhJwIhBkY28nmtzvfBlJuJr0llkg2lT2GXH6Cqn6KuCJ5wyDSV1PXI1iFODBGe1MhTGxTTDrwXLDBYYVUjLvwMkB9pSEErWUEDaWh96su5UJsQG6foUYMqXhSYqivPj4cLSNHJfRfUUe66c8_pAkTpSvCSSTF11m5Lm1Z8gRdoSrt8IrogBWuWiPoNddozpswHiPqWKmY1zAlNLypitiTv-ZcXr7uVobJW-m-TBGoCxZMLFwsuZ_YQn3EnTRhNi924QkFc4L9Qo8qKUV9oXadxeYM4HDimSy35vG1_pyt8-gPaKIgHsgKZMayaWilnJFH0JdI-v-Lzmkn37lRQjosbxF5AHDOlmKZbn_vDkk7rdKjzaKWOh0zZh9J57wSImboJfq2JLBczs0SbgpypJNS6_3rok8fhHkO6YPdFN4lc-bHGZSXatDgz3jRKk4VzywDC8VE1gxVvU_O1dHPOx6jT-ZtOwtXD90tCGRq0XWzsyvzyoEqpwqw0XujQYWJLaWHRNUyPWw3bhWu-0Hbtmtr6x0190-pQkzV_7tgrcdQ2_SkI51dRepkkWuR8fkEqLl0bsczp0MxuY1vvjDOhFiwWllaOhwdGyLJ2dyFtnOif_UrVSuA202XNy0jOCCowkfYU9OXlrggICDaHbCPB8Tu7Ty9bybpaw1D5eM9V9DNw4D5k2RYSyCIFBznlsMW1pfk7RlRWtYeemZMrWFhZfrCLV_Pn6vwFRr3q2Q5AdK8XsKs5FTueDgq2pKDVjExqkxbpYOBwaPTadP60e3xV6S1xpW0XngfDV_Rzvk1KesFwmslaYjjHtXnwLIBbZ28MOdRXiMNz4PL31vSlLvLEQvA67FaWjOIG0RA=w1366-h679",
];

const slidesFull = [
  "https://lh3.googleusercontent.com/fife/ALs6j_Gzj-Z4bRuUPuPxocs_AeoUUwwFf1PhSNIUZcG7eQo-Vh1dIR966WhbQNQRweRRGUA-hhjJyqb-zxfIMf3bfXljggxDqsMHrbcqsiBovaOmc5QwNnhDfa-iFegUGpuUpx9Z-8HlW8fnQnd94gjWr04ZUvZmqKT1Pg-HfJsr2be0ZSyQHVBVRj3p3QthriN_IctNv8Wwe9u2_ZjP2B3k79JY6ih3i16Z9gYBDeDSrC9i1KbeULTBckxz5u67GLJGKJqvJPjG2YPznfQ55L7YSGZSqv_2mv38oP5Fe9Ny8j8_XPo66D_-gJ2qhab8-WpgVU6vd4uK1bAZ0q-qiZyQIrvxDaWCiySXAgNMwzZR9n7MGhCx7kvHyd_YT7qu1Ix7rIi-MZeg8kUdH4_WkDhC91K92HyNXsiX3T3Wj8kVOWHZaPXhdDk5tHy9OpKovZcVytmEfzLlC6SdIDOQHYMkwmwo0nzTNCnPkN-WUJTTwxbE0A0vtqi3bmBzQ173Lhl0DsQjw9YJalsT61peCjfLA3As5_h1ZebZCwUkDy2NJSIJcbiob69xmZWhYDMBFgIQD7NlrvkyDgWTeVWj8zZcGK4fZezuFIET41tpP6AcPhAru0C2i8T_RBOc-gC-fZ8S05r-tj2fi8yx1eDLoufL3Y15VbZXiQt2wqgPNtq3UA-RqhH5yHJYifUxoKI_jxvFAxZUen_UKSor1Y4hRSeC1xWLuSEPL2AWjn0lgYQX15mhGk718GyEqYT3GAuh72DFHO-J1Seqv8zAn1xlXKel-vr9JF5H5ixtuZtGMqMIQs-HhdZv2QOBmG_79n5DCPMTg9sEvIk61ZCGupYE05okFFwd9hh3e8CRwFUsQ-AIEm5tYNPln3WnYAV6pPDl1WNbdkJmYRDFarwIq7llGxhlD_v67N30yH4KuXFQtC6m62t3q_nMlC3CBsd4oGCc5L5yp7fFZGj6Ac6jznw4HiCCIgOMPlDNeA0HrOiKOPwnEVOhmNHOH7YymZeQdwsJ0HT7JDJ0mEIYVjG6dUCoPevN7DW_L6A4YUHZYQw2TPbLyc8lXQ40Jlui4oqX4IY0Fz4kayWDF7cnoj6RiMnBNWLiieU-7GVL4V3aBvbdgP10DQsrOCzOVc4uV5wAJMdgNKUO7LVpKZ4A3VlkbvkouNvL93kJtmL4779f9Q4NvVAT2g2WJLgoH2ErCv_K76XRSzjTVorU-P4enL3CNFUEXduPvfLOkgUTkBfiZzYE4zqMe2xhdwgNt4mOGPeNyImwg8g4AJ7nfxwNBZPl2xuVDpqbW0bysI-Cq0H767DjbAJl4YyOzpi_Na9CBf8edYBHK9_PBAqOAYouD-4xWhv4aF4ju2fu_hfi7lFgQIQ-ghQfsKlYeuR_mvOkBEHh69PruoMceomemnwqJA84hgnFQ5omFHNi8q9B53lad3-l9EGC9RdEXkdiuA6U38ktVKti3Y5vQdh4RBlROwHZOX5z-OGgSckA7m5EQoHhi4mz0755c3_OpzhVIMEak-eWrEycOIiRMyrz9mwuZpaptCQqV5DRizqygc3dDqbh45lKSN-XrKTxOoepsTnCXhlfHNLDiuAYA-O0Uu0WuVLHB77-EVHoUpPYRKlyQ-BvPqujV8VwqMQkudTBKcQDWu1HGct5XUbXOEJD4yDkRLvf_YtbZ8DRVchX0ADRFQ=w1366-h679",
];

const bullyingFisik = () => {
  return (
    <Layout>
      {/* layar hp & tablet */}
      <Carousel autoSlide={false} className="hidden">
        {slides.map((s) => (
          <Image
            src={s}
            alt=""
            width={500}
            height={500}
            className="lg:hidden block"
            key={uuidv4()}
          />
        ))}
      </Carousel>

      {/* layar laptop/desktop */}
      <Carousel autoSlide={false}>
        {slidesFull.map((s) => (
          <Image
            src={s}
            alt=""
            className="hidden lg:block mx-13 mb-20 mt-10"
            width={1300}
            height={700}
            key={uuidv4()}
          />
        ))}
      </Carousel>
    </Layout>
  );
};

export default bullyingFisik;
