import React, { useRef, useState } from "react";

export const TelegramForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const form = useRef();

  const [photos, setPhotos] = useState([]);
  const [textInputName, setTextInputName] = useState("");
  const [textInputPhone, setTextInputPhone] = useState("");

  const [textArea, setTextArea] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleFileChange = (event) => {
    setPhotos([...event.target.files]);
  };

  const handleInputChangeName = (event) => {
    setTextInputName(event.target.value);
  };

  const handleInputChangePhone = (event) => {
    setTextInputPhone(event.target.value);
  };

  const handleTextAreaChange = (event) => {
    setTextArea(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    const token = "7729156275:AAE2Nd1uYtkddV8W_bOtpZogGyEh_yfShT0";
    const chatId = "1010490009";
    const url = `https://api.telegram.org/bot${token}/sendPhoto`;

    // photos.forEach((photo) => {
    //   formData.append("photos", photo);
    // });
    // const media = Array.from(photos).map((photo) => {
    //   formData.append("photos", photo);
    // });

    formData.append("textInputName", textInputName);
    formData.append("textInputPhone", textInputPhone);

    formData.append("textArea", textArea);
    formData.append("selectedOption", selectedOption);

    for (const photo of photos) {
      const data = new FormData();
      data.append("chat_id", chatId);
      data.append("photo", photo);
      data.append(
        "caption",
        `Name: ${textInputName}\nPhone: ${textInputPhone}\nOption: ${selectedOption}\nComment: ${textArea}`
      );

      try {
        const response = await fetch(url, {
          method: "POST",
          body: data,
        });

        const result = await response.json();
        console.log("Успех:", result);
        onClose()
      } catch (error) {
        console.error("Ошибка:", error);
      }
    }
  };

  return (
    <form className="form" ref={form} onSubmit={handleSubmit} id="form">
      <div onClick={onClose} className="form__close">
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />

          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            <path
              d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
              stroke="#d78707"
              strokeWidth="1.5"
            />
            <path
              d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
              stroke="#d78707"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>
      <p className="form__title">Отправить фото</p>
      <input
        type="name"
        name="name"
        id="name"
        placeholder="Ваше имя"
        pattern="[А-Яа-я]{3,}"
        required
        value={textInputName}
        onChange={handleInputChangeName}
      />
      <input
        type="tel"
        name="tel"
        id="tel"
        placeholder="Ваш номер телефона"
        pattern="^\+375\s?\(?(29|25|44|33|17)\)?\s?\d{3}-?\d{2}-?\d{2}$"
        required
        value={textInputPhone}
        onChange={handleInputChangePhone}
      />
      <p className="form__subtitle">Какая услуга Вам необходима?</p>
      <p className="form__description">
        Выберите вариант из представленного списка
      </p>
      <select
        name="option-services"
        id="option"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option defaultValue="Полный уход с обновлением цвета">
          Полный уход с обновлением цвета
        </option>
        <option defaultValue="Покраска подошвы">Покраска подошвы</option>
        <option defaultValue="Замша. Покраска в родной цвет">
          Замша. Покраска в родной цвет
        </option>
        <option defaultValue="Чистка и обновление обуви из замши">
          Чистка и обновление обуви из замши
        </option>
        <option defaultValue="Чистка и обновление обуви из кожи">
          Чистка и обновление обуви из кожи
        </option>
        <option defaultValue="Реставрация, устранение порезов, царапин, трещин">
          Реставрация, устранение порезов, царапин, трещин
        </option>
        <option defaultValue="Текстиль. Полный уход">
          Текстиль. Полный уход
        </option>
        <option defaultValue="Нубук. Полный уход">Нубук. Полный уход</option>
        <option defaultValue="Выведение реагентов">Выведение реагентов</option>
        <option defaultValue="Восстановление сумок">
          Восстановление сумок
        </option>
        <option defaultValue="Полный уход комбинированные материалы">
          Полный уход комбинированные материалы
        </option>
        <option defaultValue="Патинирование">Патинирование</option>
      </select>
      <p className="form__subtitle">Комментарии</p>
      <textarea
        value={textArea}
        onChange={handleTextAreaChange}
        name="comments"
        id="comments"
        placeholder="Опишите пожалуйста ваш запрос"
      ></textarea>
      <p className="form__subtitle">Загрузить фото </p>
      <input
        type="file"
        id="files"
        accept="image/*"
        multiple
        onChange={handleFileChange}
      />
      <button className="btn btn--send_foto" type="submit">
        Отправить
      </button>
    </form>
  );
};
