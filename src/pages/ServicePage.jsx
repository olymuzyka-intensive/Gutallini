import { useState } from "react";
import React from "react";
import { servicesArray } from "../constants/services";

import { Header } from "../components/Header/Header";
import { Promo } from "../components/Promo/Promo";
import CompareImage from "react-compare-image";
import { useParams } from "react-router-dom";

function ServicePage() {
  const { id } = useParams();
  const selectedObject = servicesArray.find((service) => service.id == id);

  return (
    <>
      {/* <Promo /> */}

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
            <h3 className="services__row-type--modal">До/после</h3>
            <div className="services__row-top">
              <p className="services__row-type--tern">
                срок выполнения
                <span> {selectedObject.tern}</span> дней
              </p>
              <p className="services__row-type--price">
                от {selectedObject.price} рублей
              </p>
            </div>

            <div className="services__row-bottom">
              <div className="services__row-promo">{selectedObject.promo}</div>
              <div className="services__row-comparison">
                <CompareImage
                  leftImage={selectedObject.imgBefore}
                  rightImage={selectedObject.imgAfter}
                />
              </div>
            </div>

            <h3 className="services__row-type--modal">Этапы работы</h3>

            <ul className="services__row-stages">
              {selectedObject.stages.map((item, index) => (
                <li key={index}>
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

            <div className="services__row-promo">{selectedObject.about1}</div>

            <h3 className="services__row-type--modal">
              Часто задаваемые вопросы
            </h3>

            <ul className="services__row-questions">
              {selectedObject.questions.map((item, idx) => (
                <>
                  <li key={idx}>
                    <div className="services__row-question--title">
                      {item.question}
                    </div>
                    <div className="services__row-question--answer">
                      {item.answer}
                    </div>
                  </li>
                </>
              ))}
            </ul>
            <div className="services__row-promo">{selectedObject.about2}</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicePage;
