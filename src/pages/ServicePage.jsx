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

        <div className="services__row-stages">
          <div className="services__row-stage--title">
            {selectedObject.stage1}
          </div>
          <div className="services__row-stage--text">
            {selectedObject.text1}
          </div>
          <div className="services__row-stage--title">
            {selectedObject.stage2}
          </div>
          <div className="services__row-stage--text">
            {selectedObject.text2}
          </div>
          <div className="services__row-stage--title">
            {selectedObject.stage3}
          </div>
          <div className="services__row-stage--text">
            {selectedObject.text3}
          </div>
          <div className="services__row-stage--title">
            {selectedObject.stage4}
          </div>
          <div className="services__row-stage--text">
            {selectedObject.text4}
          </div>
          <div className="services__row-stage--title">
            {selectedObject.stage5}
          </div>
          <div className="services__row-stage--text">
            {selectedObject.text5}
          </div>
        </div>
        <div className="services__row-promo">{selectedObject.about1}</div>

          <h3 className="services__row-type--modal">Часто задаваемые вопросы</h3>

        <div className="services__row-questions">
          <div className="services__row-question--title">
            {selectedObject.question1}
          </div>
          <div className="services__row-question--answer">
            {selectedObject.answer1}
          </div>
          <div className="services__row-question--title">
            {selectedObject.question2}
          </div>
          <div className="services__row-question--answer">
            {selectedObject.answer2}
          </div>
          <div className="services__row-question--title">
            {selectedObject.question3}
          </div>
          <div className="services__row-question--answer">
            {selectedObject.answer3}
          </div>
          <div className="services__row-question--title">
            {selectedObject.question4}
          </div>
          <div className="services__row-question--answer">
            {selectedObject.answer4}
          </div>
          <div className="services__row-question--title">
            {selectedObject.question5}
          </div>
          <div className="services__row-question--answer">
            {selectedObject.answer5}
          </div>
        </div>

        <div className="services__row-promo">{selectedObject.about2}</div>
      </div>

        </div>
    </section>
    </>
  );
}

export default ServicePage;
