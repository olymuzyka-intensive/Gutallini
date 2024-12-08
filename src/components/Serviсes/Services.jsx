import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

import { servicesArray } from "../../constants/services.js";

export const Services = () => {
  // const [showModal, setShowModal] = useState(false);
  const [selectedObject, setSelectedObject] = useState(null);
  // const [showChapter, setShowChapter] = useState("tab1");

  const openServicesDetails = (obj) => {
    // setShowModal(true);
    setSelectedObject(obj);
  };

  // const toggleTab = (event) => {
  //   setShowChapter(event.target.value);
  // };

  // const toggleTab1 = () => {
  //   setShowChapter("tab1");
  // };
  // const toggleTab2 = () => {
  //   setShowChapter("tab2");
  // };
  // const toggleTab3 = () => {
  //   setShowChapter("tab3");
  // };

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__row">
          <h2 className="services__row-title">Услуги</h2>
          <div className="services__row-section">
            {servicesArray.map((item) => (
              <Link
                to={`/service/${item.id}`}
                key={item.id}
                className="services__item"
                data-info={item.id}
                onClick={() => openServicesDetails(item)}
              >
                <article className="services__card">
                  <img
                    src={item.imgAfter}
                    alt="photo"
                    className="services__card-img"
                  />
                  <div className="services__card-info">
                    <p className="services__card-type">{item.service}</p>
                    <div className="services__card-desc">
                      <p className="services__card-price">
                        от {item.price} рублей
                      </p>
                      <p className="btn btn--more">
                        {/* <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M29.9 16.4L23.9 28.4C23.7 28.7 23.4 29 23 29H10C9.4 29 9 28.6 9 28C9 27.4 9.4 27 10 27H22.4L27.9 16L22.4 5H10C9.4 5 9 4.6 9 4C9 3.4 9.4 3 10 3H23C23.4 3 23.7 3.2 23.9 3.6L29.9 15.6C30 15.9 30 16.2 29.9 16.5V16.4ZM10 22C10 22.6 10.4 23 11 23H22V21H11C10.4 21 10 21.4 10 22ZM18 15H7C6.4 15 6 15.4 6 16C6 16.6 6.4 17 7 17H18V15ZM22 11V9H11C10.4 9 10 9.4 10 10C10 10.6 10.4 11 11 11H22ZM3 15C2.4 15 2 15.4 2 16C2 16.6 2.4 17 3 17C3.6 17 4 16.6 4 16C4 15.4 3.6 15 3 15ZM6 21C5.4 21 5 21.4 5 22C5 22.6 5.4 23 6 23C6.6 23 7 22.6 7 22C7 21.4 6.6 21 6 21ZM6 11C6.6 11 7 10.6 7 10C7 9.4 6.6 9 6 9C5.4 9 5 9.4 5 10C5 10.6 5.4 11 6 11Z"
                            fill="#D99B3F"
                          />
                        </svg> */}
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2.66667H4C3.64638 2.66667 3.30724 2.80715 3.05719 3.0572C2.80714 3.30724 2.66666 3.64638 2.66666 4.00001V12C2.66666 12.3536 2.80714 12.6928 3.05719 12.9428C3.30724 13.1929 3.64638 13.3333 4 13.3333H12C12.3536 13.3333 12.6928 13.1929 12.9428 12.9428C13.1929 12.6928 13.3333 12.3536 13.3333 12V4.00001C13.3333 3.64638 13.1929 3.30724 12.9428 3.0572C12.6928 2.80715 12.3536 2.66667 12 2.66667ZM12 18.6667H4C3.64638 18.6667 3.30724 18.8071 3.05719 19.0572C2.80714 19.3072 2.66666 19.6464 2.66666 20V28C2.66666 28.3536 2.80714 28.6928 3.05719 28.9428C3.30724 29.1929 3.64638 29.3333 4 29.3333H12C12.3536 29.3333 12.6928 29.1929 12.9428 28.9428C13.1929 28.6928 13.3333 28.3536 13.3333 28V20C13.3333 19.6464 13.1929 19.3072 12.9428 19.0572C12.6928 18.8071 12.3536 18.6667 12 18.6667ZM28 2.66667H20C19.6464 2.66667 19.3072 2.80715 19.0572 3.0572C18.8071 3.30724 18.6667 3.64638 18.6667 4.00001V12C18.6667 12.3536 18.8071 12.6928 19.0572 12.9428C19.3072 13.1929 19.6464 13.3333 20 13.3333H28C28.3536 13.3333 28.6928 13.1929 28.9428 12.9428C29.1929 12.6928 29.3333 12.3536 29.3333 12V4.00001C29.3333 3.64638 29.1929 3.30724 28.9428 3.0572C28.6928 2.80715 28.3536 2.66667 28 2.66667Z"
                            stroke="#D99B3F"
                            strokeWidth="2.66667"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M18.6667 18.6667H29.3333M24 24H29.3333M18.6667 29.3333H29.3333"
                            stroke="#D99B3F"
                            strokeWidth="2.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </p>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
