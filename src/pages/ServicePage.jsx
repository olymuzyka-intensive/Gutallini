import { useState } from "react";
import React from "react";
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { servicesArray } from "../constants/services";
import { Send } from "../components/Send/Send";

import CompareImage from "react-compare-image";
import { useParams } from "react-router-dom";
import { TelegramFormRequest } from "../components/TelegramForm/TelegramFormRequest";
// import ScrollToTop from "../components/ScrollToTop";

function ServicePage() {
  const { id } = useParams();

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const selectedObject = servicesArray.find((service) => service.id == id);
  const [questions, setQuestions] = useState(selectedObject.questions);
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* <ScrollToTop/> */}

      <section className="promo">
        <div className="container">
          <div className="promo__row">
          <a href="tel:+375445090525">
            <svg className="call" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g><rect fill="#fff" height="116" rx="16" width="116" x="6" y="6"></rect><g fill="#fff5eb"><path d="m54.517 73.483c-5.855-5.855-10.88-10.906-14.759-19.244a5.4 5.4 0 0 1 1.066-6.094l8.176-8.171a4.224 4.224 0 0 0 .77-4.918l-6.651-12.926a5.768 5.768 0 0 0 -9.207-1.44l-10.154 10.154a16.04 16.04 0 0 0 -3.788 16.856c4.851 13.143 13.362 25.8 23.945 36.383s23.24 19.096 36.385 23.947a16.042 16.042 0 0 0 16.858-3.788l10.152-10.155a5.766 5.766 0 0 0 -1.441-9.206l-12.925-6.646a4.224 4.224 0 0 0 -4.918.77l-8.171 8.171a5.4 5.4 0 0 1 -6.094 1.066c-8.338-3.879-13.389-8.904-19.244-14.759z" fill="#fff5eb"></path><path d="m103.5 58.25a1.75 1.75 0 0 1 -1.75-1.75 30.284 30.284 0 0 0 -30.25-30.25 1.75 1.75 0 0 1 0-3.5 33.789 33.789 0 0 1 33.75 33.75 1.75 1.75 0 0 1 -1.75 1.75z" fill="#fff5eb"></path><path d="m89.5 62.25a1.75 1.75 0 0 1 -1.75-1.75 20.273 20.273 0 0 0 -20.25-20.25 1.75 1.75 0 0 1 0-3.5 23.777 23.777 0 0 1 23.75 23.75 1.75 1.75 0 0 1 -1.75 1.75z" fill="#fff5eb"></path></g></g></svg>
          </a>
            <div className="promo__row-main">
              <h2 className="promo__row-title--service">
                {selectedObject.service}
              </h2>
              <div className="promo__row-type">
                <div className="promo__row-type--tern">
                  <img src="/img/icons/term.svg" alt="tern" />
                  <p> от {selectedObject.tern} дней</p>
                </div>
                <div className="promo__row-type--price">
                  <img src="/img/icons/price.svg" alt="price" />
                  <p>
                    от <span>{selectedObject.price}</span> рублей
                  </p>
                </div>
              </div>
            </div>

            <Send isActive={true} />
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <div
            key={selectedObject.id}
            className="services__row--page"
            data-info={selectedObject.id}
          >
            <div className="services__row-top">
              <div className="services__row-promo">{selectedObject.promo}</div>
            </div>
            <h3 className="services__row-type--desc">До/после</h3>

            <div className="services__row-bottom">
              <div className="services__row-content">
                <div className="btn btn--call" onClick={openModal}>
                  Оставить заявку
                </div>
                <TelegramFormRequest isOpen={showModal} onClose={closeModal} />

                <div className="services__row-about">
                  {selectedObject.about1}
                </div>

                {/* <div className="services__row-about">
                  {selectedObject.about2}
                </div> */}
              </div>

              <div className="services__row-comparison">
                <CompareImage
                  leftImage={selectedObject.imgBefore}
                  rightImage={selectedObject.imgAfter}
                />
              </div>
            </div>
            <div className="services__row-promo">{selectedObject.about2}</div>

            <h3 className="services__row-type--desc">Этапы работы</h3>

            <ul className="services__row-stages">
              {selectedObject.stages.map((item) => (
                <li key={item.idx} className="services__row-stage">
                  <div className="services__row-stage--title">{item.stage}</div>
                  <div className="services__row-stage--text">{item.text}</div>
                </li>
              ))}
            </ul>

            <h3 className="services__row-type--desc">
              Часто задаваемые вопросы
            </h3>

            <div className="services__row-questions">
              {questions.map((item, index) => (
                <div key={item.id} className="services__row-question">
                  <div
                    className="services__row-question--title"
                    onClick={() => handleToggle(index)}
                  >
                    {item.question}
                    <button
                      className="btn btn--switch"
                      onClick={() => handleToggle(index)}
                    >
                      {/* {openIndex === index ? (
                        <AiOutlineMinus />
                      ) : (
                        <AiOutlinePlus />
                      )} */}
                      {openIndex === index ? (
                        <svg
                          width="8"
                          height="14"
                          viewBox="0 0 8 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.174988 12.4917L1.35832 13.6667L3.99999 11.025L6.64165 13.6667L7.81665 12.4917L3.99999 8.66668L0.174988 12.4917ZM7.82499 1.50834L6.64165 0.333344L3.99999 2.97501L1.35832 0.333344L0.174988 1.50834L3.99999 5.33334L7.82499 1.50834Z"
                            fill="#2c2a28"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="8"
                          height="16"
                          viewBox="0 0 8 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.99999 2.85833L6.64165 5.5L7.81665 4.325L3.99999 0.5L0.174988 4.325L1.35832 5.5L3.99999 2.85833ZM3.99999 13.1417L1.35832 10.5L0.183321 11.675L3.99999 15.5L7.82499 11.675L6.64165 10.5L3.99999 13.1417Z"
                            fill="#2c2a28"
                          />
                        </svg>
                      )}
                    </button>
                  </div>

                  {openIndex === index && (
                    <div className="services__row-question--answer">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Send isActive={false} />
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicePage;
