import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="absolute w-full top-0 z-10 py-3" data-aos="fade-down">
      <div className="container flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="" className="w-[250px]" />
        </Link>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-white font-medium"
            onClick={() => {
              window.scrollBy(0, 900);
            }}
          >
            Транспортные средства
          </a>
          <a
            href="#"
            className="text-white font-medium"
            onClick={() => {
              window.scrollBy(0, 900);
            }}
          >
            Новинка
          </a>
          <a href="#adress" className="text-white font-medium">
            Контакты
          </a>
        </div>
      </div>
    </div>
  );
}
