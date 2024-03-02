import React from "react";
import logo from "../../images/logo.png";

export default function Header() {
  return (
    <div className="absolute w-full top-0 z-10 py-3" data-aos="fade-down">
      <div className="container flex items-center justify-between">
        <img src={logo} alt="" className="w-[250px]" />
        <div className="flex items-center gap-4">
          <a href="#" className="text-white font-medium">
            Транспортные средства
          </a>
          <a href="#" className="text-white font-medium">
            Новинка
          </a>
          <a href="#" className="text-white font-medium">
            О компании
          </a>
          <a href="#" className="text-white font-medium">
            Контакты
          </a>
        </div>
      </div>
    </div>
  );
}
