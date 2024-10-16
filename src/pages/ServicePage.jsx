import { useState } from "react";
import React from "react";
import { servicesArray } from "../constants/services";
import { Send } from "../components/Send/Send";

import CompareImage from "react-compare-image";
import { useParams } from "react-router-dom";
// import ScrollToTop from "../components/ScrollToTop";

function ServicePage() {
  const { id } = useParams();
  const selectedObject = servicesArray.find((service) => service.id == id);

  return (
    <>

      <section className="promo">
        <div className="container">
          <div className="promo__row">
            <a href="tel:+375445090525">
              <img className="call" src="/img/icons/phone.svg" alt="customer" />
            </a>
            <div className="promo__row-main">
              <div className="logo">
                <img src="/img/logo.png" alt="logo" />
              </div>
              <h2 className="promo__row-title--service">
                {selectedObject.service}
              </h2>
            </div>

            <Send isActive={true} />
            <div className="services__row-about--promo">{selectedObject.about2}</div>
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
            <h3 className="services__row-type--desc">До/после</h3>
            <div className="services__row-top">
              <div className="services__row-promo">{selectedObject.promo}</div>
            </div>

            <div className="services__row-bottom">
              <div className="services__row-content">
                <p className="services__row-type--tern">
                  срок выполнения от
                  <span> {selectedObject.tern}</span> дней
                </p>
                <p className="services__row-type--price">
                  стоимость услуги от {selectedObject.price} рублей
                </p>
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
            <Send isActive={false} />

            <h3 className="services__row-type--desc">Этапы работы</h3>

            <ul className="services__row-stages">
              {selectedObject.stages.map((item) => (
                <li key={item.idx} className="services__row-stage">
                  {/* {console.log(item.idx)} */}
                  <div className="services__row-stage--title">
                    {item.stage}
                    {/* {console.log(item.stage)} */}
                  </div>
                  <div className="services__row-stage--text">
                    {item.text}
                    {/* {console.log(item.text)} */}
                  </div>
                </li>
              ))}
            </ul>

            <h3 className="services__row-type--desc">
              Часто задаваемые вопросы
            </h3>

            <ul className="services__row-questions">
              {selectedObject.questions.map((item) => (
                <>
                  <li key={item.question} className="services__row-question">
                    {/* {console.log(item.question)} */}
                    <div className="services__row-question--title">
                      {item.question}
                      {/* {console.log(item.question)} */}
                    </div>
                    <div className="services__row-question--answer">
                      {item.answer}
                      {/* {console.log(item.answer)} */}
                    </div>
                  </li>
                </>
              ))}
            </ul>
            <Send isActive={false} />
          </div>
        </div>
      </section>
      {/* <ScrollToTop/> */}

    </>
  );
}

export default ServicePage;
