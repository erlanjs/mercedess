import React from "react";
import VideoBackground from "../videoBackground/VideoBackground";
import video from "../../video/merc.mp4";

export default function Hero() {
  return (
    <div>
      <VideoBackground src={video} type="video/mp4" />
      <div
        className="absolute w-full min-h-screen top-0 left-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.29037552521008403) 100%)",
        }}
      >
        <div className=" container  flex flex-col items-start gap-3 ">
          <h1
            className="text-4xl text-white font-bold pt-[400px] "
            data-aos="fade-up"
          >
            Онлайн-Автосалон Mercedes-Benz: <br /> Ваш Путь к Роскоши
          </h1>
          <p
            className="text-[#DEDEDE]  max-w-[700px]"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Добро пожаловать в наш онлайн-автосалон, где элегантность и
            технологическое совершенство встречаются под одной крышей. Мы с
            гордостью представляем вам возможность приобрести именитые
            автомобили Mercedes-Benz через нашу современную электронную торговую
            площадку.
          </p>
          <button
            className="bg-white py-3 px-10 rounded-md font-medium mt-3"
            data-aos="fade-up"
            data-aos-delay="600"
            onClick={() => {
              window.scrollBy(0, 900);
            }}
          >
            Выбрать автомобиль
          </button>
        </div>
      </div>
    </div>
  );
}
