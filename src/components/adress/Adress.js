import React from "react";

export default function Adress() {
  return (
    <div className="container" id="adress">
      <h2 className="text-white font-bold text-2xl text-center pt-10">
        Наш адрес
      </h2>
      <div className="flex justify-between items-center py-14">
        <div className="flex flex-col justify-start gap-4">
          <h3 className="text-white text-xl">Адрес: Улица Усенбаева, 106</h3>
          <h3 className="text-white text-xl">Контакты: +996 557 030 630</h3>
          <h3 className="text-white text-xl">Instagram: @mercedess_bishkek</h3>
          <h3 className="text-white text-xl">WhatsApp: +996 557 030 630</h3>
          <h3 className="text-white text-xl">Telegram: @mercedess_bishkek</h3>
        </div>
        <iframe
          title="ds"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.3939819334178!2d74.61231717665052!3d42.88563370173493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7ec9e3d3729%3A0xc92302010c865d03!2zMTA2INGD0LvQuNGG0LAg0KPRgdC10L3QsdCw0LXQstCwLCDQkdC40YjQutC10LogNzIwMDEx!5e0!3m2!1sru!2skg!4v1711265363391!5m2!1sru!2skg"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
