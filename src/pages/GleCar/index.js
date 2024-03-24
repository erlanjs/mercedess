import React, { useEffect, useState } from "react";
import gle from "../../images/gle.jpeg";
import gle1 from "../../images/gle1.avif";
import gle2 from "../../images/gle2.jpeg";
import gle3 from "../../images/gle3.jpeg";
import Adress from "../../components/adress/Adress";
import Footer from "../../components/footer/Footer";
import Basket from "../../components/basket/Basket";

export default function GLeCar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [car, setCar] = useState({});
  const [isBuy, setBuy] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex >= 0 && currentIndex < car?.images?.length) {
        setCurrentIndex(currentIndex + 1);
      }

      if (currentIndex === car?.images?.length - 1) {
        setCurrentIndex(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    setCar(JSON.parse(localStorage.getItem("one-car")));
    window.scrollTo(0, 0);
  }, []);

  console.log("car", car);

  const characteristics = [
    {
      name: "Год:",
      value: car.year,
    },
    {
      name: "Объем:",
      value: car.volume,
    },
    {
      name: "Пробег:",
      value: car.mileage,
    },
    {
      name: "Цвет:",
      value: car.color,
    },
    {
      name: "Руль:",
      value: car.steering?.[0].steering,
    },
    {
      name: "Коробка:",
      value: car.transmission?.[0].transmission,
    },
    {
      name: "Привод:",
      value: car.drive?.[0].drive,
    },
    {
      name: "Топливо:",
      value: car.fuel?.[0].fuel,
    },
    {
      name: "Кузов:",
      value: car.body?.[0].body,
    },
    {
      name: "Цена:",
      value: car.price + "$",
    },
  ];

  return (
    <>
      <div
        className="min-h-screen w-full top-0"
        style={{
          background: `url(${car?.images?.[currentIndex]?.image}) no-repeat center/cover`,
        }}
      >
        <div
          className="w-full min-h-screen absolute top-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.29037552521008403) 100%)",
          }}
        >
          <div className="container flex flex-col items-center gap-2">
            <h1 className="text-white text-4xl text-center  font-bold pt-[140px] drop-shadow-lg">
              {car.model}
            </h1>
            <p className="text-[#ffffffd3] text-lg max-w-[800px] mt-4 drop-shadow-lg text-center">
              {car.description}
            </p>
            <div className="flex mt-[350px] overflow-x-scroll">
              {car?.images?.map((img, index) => (
                <img
                  className="w-[300px] object-cover cursor-pointer"
                  src={img.image}
                  style={{
                    opacity: index === currentIndex ? "1" : ".5",
                  }}
                  alt=""
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container">
          <div className="flex flex-col items-center">
            <h1 className="text-center text-white text-3xl pb-4 pt-10 font-bold">
              Характеристики
            </h1>
            <p className="text-white text-center w-[700px]">
              Мы предоставляем полную и точную информацию о характеристиках
              наших автомобилей, чтобы вы могли быть уверены в своем выборе и
              получить максимальное удовольствие от эксплуатации вашего
              автомобиля. Если у вас возникнут вопросы или вам потребуется
              дополнительная информация, наши специалисты всегда готовы помочь
              вам.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-9 pb-11">
            {characteristics.map((el, index) => (
              <div
                className=" bg-black w-[200px] h-[110px] rounded-3xl flex flex-col gap-3 items-center justify-center"
                style={{ boxShadow: "0px 2px 15px gray" }}
              >
                <h5 className="text-white">{el.name}</h5>
                <h4 className="text-white text-xl font-bold">{el.value}</h4>
              </div>
            ))}
            <div className="">
              <button
                onClick={() => setBuy(true)}
                className="bg-white py-4 px-6 rounded-xl font-bold mt-7"
              >
                Купить в один клик
              </button>
            </div>
          </div>
          <Adress />
        </div>
      </div>
      <Footer />
      {isBuy && <Basket data={car} onClose={() => setBuy(false)} />}
    </>
  );
}
