import React, { useRef, useState } from "react";

export const TelegramFormRequest = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const form = useRef();

  const [photos, setPhotos] = useState([]);
  const [textInputName, setTextInputName] = useState("");
  const [textInputPhone, setTextInputPhone] = useState("");

  const [textArea, setTextArea] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [timeTo, setTimeTo] = useState('')


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

  const handleSelectDate = (event) => {
    setDate(event.target.value);
  };

  const handleSelectTime = (event) => {
    setTime(event.target.value);
  };
  const handleSelectTimeTo = (event) => {
    setTimeTo(event.target.value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = "7729156275:AAE2Nd1uYtkddV8W_bOtpZogGyEh_yfShT0";
    const chatId = "1010490009";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: `Имя: ${textInputName}\nТелефон: ${textInputPhone}\nУслуга: ${selectedOption}\nКомментарий: ${textArea}\nУдобное время дл звонка: ${date} с ${time} по ${timeTo}`,
      }),
    });

    const data = new FormData();
    photos.forEach((photo) => {
      data.append("photo", photo);
    });

    const photoUrl = `https://api.telegram.org/bot${token}/sendPhoto`;

    for (const photo of photos) {
      data.append("chat_id", chatId);

      data.append("photo", photo);

      await fetch(photoUrl, {
        method: "POST",
        body: data,
      });
      data.delete("photo"); // Удаляем предыдущую фотографию, чтобы избежать конфликта
    }
    onClose();
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
      <p className="form__title">Оставить заявку</p>
      <input
        type="name"
        name="name"
        id="name"
        maxLength='50'
        placeholder="Ваше имя"
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
      <label className="form__subtitle" for="option">Какая услуга Вам необходима?</label>
      <p className="form__description">
        Выберите вариант из представленного списка
      </p>
      <select
        name="option-services"
        id="option"
        value={selectedOption}
        onChange={handleSelectChange} required
      >
        <option defaultValue="" selected disabled></option>
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
      <label className="form__subtitle" for="comments">Комментарии</label>
      <textarea
        value={textArea}
        onChange={handleTextAreaChange}
        name="comments"
        id="comments"
        placeholder="Опишите пожалуйста вашу проблему"        
      ></textarea>
      <label className="form__subtitle" for="files">Вы можете загрузить фото </label>
      <input
        type="file"
        id="files"
        accept="image/*"
        multiple        
        onChange={handleFileChange}
      />

      <label for="date">Мы с Вами свяжемся</label>
      <label className="form__description" for="localdate">
        Выберите день и удобное время 
      </label>
      <input type="date" id="date" name="date" onChange={handleSelectDate}/>
      <input type="time" id="time" name="date" onChange={handleSelectTime}/>
      <input type="time" id="time" name="date" onChange={handleSelectTimeTo}/>


      <button className="btn btn--send_foto" type="submit">
        Отправить
      </button>
    </form>
  );
};
