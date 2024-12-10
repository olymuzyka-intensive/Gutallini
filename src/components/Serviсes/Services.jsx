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
                      <p className="btn--more">                       
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
