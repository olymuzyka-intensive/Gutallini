import { useState } from "react";
import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { servicesArray } from "../constants/services";
import { Send } from "../components/Send/Send";

import CompareImage from "react-compare-image";
import { useParams } from "react-router-dom";
// import ScrollToTop from "../components/ScrollToTop";

function ServicePage() {
  const { id } = useParams();

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
              <img className="call" src="/img/icons/phone.svg" alt="customer" />
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
                    {" "}
                    от <span>{selectedObject.price}</span> рублей
                  </p>
                </div>
              </div>
            </div>

            <Send isActive={true} />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div
            key={selectedObject.id}
            className="services__row"
            data-info={selectedObject.id}
          >
            <div className="services__row-top">
              <div className="services__row-promo">{selectedObject.promo}</div>
            </div>
            <h3 className="services__row-type--desc">До/после</h3>

            <div className="services__row-bottom">
              <div className="services__row-content">
                <div className="services__row-about">
                  {selectedObject.about1}
                </div>
                <div className="services__row-about">
                  {selectedObject.about2}
                </div>
              </div>

              <div className="services__row-comparison">
                <CompareImage
                  leftImage={selectedObject.imgBefore}
                  rightImage={selectedObject.imgAfter}
                />
              </div>
            </div>
            <Send isActive={false} />

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
                      {openIndex === index ? (
                        <AiOutlineMinus />
                      ) : (
                        <AiOutlinePlus />
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
