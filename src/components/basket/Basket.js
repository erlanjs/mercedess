import React, { useState } from "react";
import axios from "axios";

export default function Basket({ data, onClose }) {
  const [newData, setNewData] = useState({
    name: "",
    phone: "",
    email: "",
    adress: "",
  });

  function onSubmit(e) {
    e.preventDefault();
    const token = "7054269884:AAFfdufFz_3Jhf-gpb3BDFT6s96DiCdHXqs";
    const chatID = "-1002120458918";

    const text = `Пришло новый заказ: \n - ИМЯ: ${newData.name} \n - Адрес: ${newData.adress} \n - Email: ${newData.email} \n - Название авто: ${data.model} \n - Цена авто: ${data.price} \n - Номер телефона: ${newData.phone} `;

    axios
      .post("https://api.telegram.org/bot" + token + "/sendPhoto", {
        chat_id: chatID,
        photo: data.images[0].image,
        caption: text,
      })
      .then((response) => {
        console.log(response);
        alert("Ваш заказ успешно отправлено");
        onClose();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function onChange(e) {
    const { value, name } = e.target;

    setNewData({ ...newData, [name]: value });
  }

  return (
    <div className="w-full min-h-screen fixed top-0 left-0 bg-[#00000075] flex justify-center items-center px-6">
      <div className="max-w-[1000px] w-full p-5 bg-white pb-[50px] rounded-lg">
        <h1 className="text-3xl font-bold py-6">{data.model}</h1>
        <div className="flex ">
          <div className="w-[50%]">
            <form class="max-w-sm mx-auto" onSubmit={onSubmit}>
              <div class="mb-5">
                <label
                  for="name"
                  class="block mb-2 text-sm text-start font-medium text-gray-900 dark:text-white"
                >
                  Ваше ИМЯ
                </label>
                <input
                  type="name"
                  id="name"
                  name="name"
                  class="bg-gray-50 border text-start border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ФИО "
                  value={newData.name}
                  onChange={onChange}
                  required
                />
              </div>
              <div class="mb-5">
                <label
                  for="phone"
                  class="block mb-2 text-sm text-start font-medium text-gray-900 dark:text-white"
                >
                  Ваше номер телефона
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  class="bg-gray-50 border text-start border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="+996"
                  value={newData.phone}
                  onChange={onChange}
                  required
                />
              </div>
              <div class="mb-5">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-start text-gray-900 dark:text-white"
                >
                  Ваш email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                  value={newData.email}
                  onChange={onChange}
                  required
                />
              </div>
              <div class="mb-5">
                <label
                  for="adress"
                  class="block mb-2 text-sm font-medium text-start text-gray-900 dark:text-white"
                >
                  Ваш адрес
                </label>
                <input
                  type="text"
                  id="adress"
                  name="adress"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Укажите где вы проживаете"
                  required
                  value={newData.adress}
                  onChange={onChange}
                />
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  class="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Заказать
                </button>
                <h3 className="font-bold text-lg">Цена: {data.price}$</h3>
              </div>
            </form>
          </div>
          <div className="w-[50%]">
            <p className="">{data.description}</p>
            <div className="flex flex-wrap justify-center mt-3 items-start gap-1  ">
              {data.images.slice(0, 2).map((img) => (
                <img className="w-[200px]" src={img.image} alt="" />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-3" onClick={onClose}>
          <button className="text-white bg-gray-700  hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm  px-5 py-2.5  dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}
