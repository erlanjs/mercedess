import React from "react";

export default function Gle({ image, title, text, price, description }) {
  return (
    <div
      className="min-h-screen text-center"
      style={{ background: `url(${image}) no-repeat center/cover` }}
    >
      <h1
        className="text-white text-4xl font-bold pt-[70px] drop-shadow-lg"
        data-aos="fade-up"
      >
        {title}
      </h1>
      <p
        className="text-[#ffffffd3] text-2xl drop-shadow-lg"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        От {price}*
      </p>
      <div className="flex gap-3 justify-center mt-[640px]">
        <button
          className="bg-white py-3 px-10 rounded-md font-medium mt-3"
          data-aos="fade-right"
        >
          Доступно в магазине
        </button>
        <button
          className="bg-[#222222d5] text-white py-3 px-10 rounded-md font-medium mt-3 "
          data-aos="fade-left"
        >
          Узнать больше
        </button>
      </div>
      <p className="text-[#ffffffd3] text-lg mt-4" data-aos="zoom-in-up">
        {text}
      </p>
    </div>
  );
}
