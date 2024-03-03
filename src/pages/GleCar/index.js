import React, { useEffect, useState } from "react";
import gle from "../../images/gle.jpeg";
import gle1 from "../../images/gle1.avif";
import gle2 from "../../images/gle2.jpeg";
import gle3 from "../../images/gle3.jpeg";

export default function GLeCar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgs = [gle, gle1, gle2, gle3];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex >= 0 && currentIndex < 3) {
        setCurrentIndex(currentIndex + 1);
      }

      if (currentIndex === 3) {
        setCurrentIndex(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <>
      <div
        className="min-h-screen w-full top-0"
        style={{
          background: `url(${imgs[currentIndex]}) no-repeat center/cover`,
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
              Впечатляющая мощность CLE Coupe
            </h1>
            <p className="text-[#ffffffd3] text-lg max-w-[800px] mt-4 drop-shadow-lg text-center">
              Новый Mercedes-AMG GLE Coupe сочетает в себе наилучшие качества –
              спортивность, внедорожные характеристики и практичность. Более
              того, именно автомобиль нового поколения Mercedes-AMG GLE является
              самым производительным в сегменте.
            </p>
            <div className="flex mt-[350px]">
              {imgs.map((img, index) => (
                <img
                  className="w-[300px] object-cover cursor-pointer"
                  src={img}
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
    </>
  );
}
