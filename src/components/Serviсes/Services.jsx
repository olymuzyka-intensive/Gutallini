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
              <Link to={`/service/${item.id}`}
                key={item.id}
                className="services__row-item"
                data-info={item.id}
                onClick={() => openServicesDetails(item)}
              >
                <img
                  src={item.imgAfter}
                  alt="photo"
                  className="services__row-img"
                />
                <p className="services__row-type">{item.service}</p>
                <div className="services__row-info">
                  <p className="services__row-price">от {item.price} рублей</p>
                  <p className="btn btn--more"> Подробнее </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
