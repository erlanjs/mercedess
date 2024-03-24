import React, { useState } from "react";
import { Link } from "react-router-dom";
import Basket from "../basket/Basket";

export default function Gle({ data, image, title, text, price, link }) {
  const [isBuy, setBuy] = useState(false);
  return (
    <div
      className="min-h-screen text-center"
      style={{
        background: `url(${data.images[0].image}) no-repeat center/cover`,
      }}
    >
      <h1
        className="text-white text-4xl font-bold pt-[70px] drop-shadow-lg"
        data-aos="fade-up"
      >
        {data.model}
      </h1>
      <p
        className="text-[#ffffffd3] text-2xl drop-shadow-lg"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        От ${data.price}*
      </p>
      <div className="flex gap-3 justify-center mt-[640px]">
        <button
          onClick={() => {
            setBuy(true);
          }}
          className="bg-white py-3 px-10 rounded-md font-medium mt-3"
          data-aos="fade-right"
        >
          Доступно в магазине
        </button>
        <Link to={`/car/${data.model}`}>
          <button
            className="bg-[#222222d5] text-white py-3 px-10 rounded-md font-medium mt-3 "
            data-aos="fade-left"
            onClick={() => {
              localStorage.setItem("one-car", JSON.stringify(data));
            }}
          >
            Узнать больше
          </button>
        </Link>
      </div>
      <p className="text-[#ffffffd3] text-lg mt-4" data-aos="zoom-in-up">
        *Цена без учета льгот составляет {data.price} долларов КР, без учета
        налогов и сборов. Возможны изменения.
      </p>
      {isBuy && <Basket data={data} onClose={() => setBuy(false)} />}
    </div>
  );
}
