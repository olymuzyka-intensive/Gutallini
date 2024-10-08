import { useState } from "react";
import React from "react";
import CompareImage from "react-compare-image";
import { servicesArray } from "../../constants/services.js";

export const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedObject, setSelectedObject] = useState(null);
  const [showChapter, setShowChapter] = useState("tab1");

  const openServicesDetails = (obj) => {
    setShowModal(true);
    setSelectedObject(obj);
  };

  // const toggleTab = (event) => {
  //   setShowChapter(event.target.value);
  // };

  const toggleTab1 = () => {
    setShowChapter("tab1");
  };
  const toggleTab2 = () => {
    setShowChapter("tab2");
  };
  const toggleTab3 = () => {
    setShowChapter("tab3");
  };

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__row">
          <h2 className="services__row-title">Услуги</h2>
          <div className="services__row-section">
            {servicesArray.map((item) => (
              <div
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
                  <div className="btn btn--more"> Подробнее </div>
                </div>
              </div>
            ))}
          </div>

          {showModal && (
            <div
              // key={item.id}
              // className={`${
              //   showModal === item.id ? "services__row-item modal" : "services__row-item"
              // }`}
              // data-info={item.id}
              className="services__row-item modal"
            >
              <div className="services__chapter">
                <div
                  className={
                    showChapter === "tab1"
                      ? "services__chapter-nav active"
                      : "services__chapter-nav"
                  }
                  onClick={toggleTab1}
                >
                  До/после
                </div>
                <div
                  className={
                    showChapter === "tab2"
                      ? "services__chapter-nav active"
                      : "services__chapter-nav"
                  }
                  onClick={toggleTab2}
                >
                  Этапы работы
                </div>
                <div
                  className={
                    showChapter === "tab3"
                      ? "services__chapter-nav active"
                      : "services__chapter-nav"
                  }
                  onClick={toggleTab3}
                >
                  Часто задаваемые вопросы
                </div>

                <div
                  className="services__row-close"
                  onClick={() => (toggleTab1(), setShowModal(null))}
                >
                  <svg
                    width="40px"
                    height="40px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                        stroke="#d78707"
                        strokeWidth="1"
                      ></path>{" "}
                      <path
                        d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
                        stroke="#d78707"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
              </div>

              <div className="services__chapter-content">
                <div
                  className={
                    showChapter === "tab1"
                      ? "services__chapter-item active"
                      : "services__chapter-item"
                  }
                >

                  {/* <div className="services__row-info--modal">
                      <div className="services__row-promo"> {selectedObject.promo} </div>

                      <p className="services__row-type--tern">
                        срок выполнения
                        <span> {selectedObject.tern}</span> дней
                      </p>
                      <p className="services__row-type--price">
                        от {selectedObject.price} рублей
                      </p>
                    </div> */}
                  {/* <div className="services__row-img--comparison">
                      <CompareImage
                          leftImage={selectedObject.imgBefore}                       
                          rightImage={selectedObject.imgAfter}                        
                        />
                    </div> */}

                  <div className="services__row-info--modal">                  
                    <h3 className="services__row-type--modal">
                      {selectedObject.service}
                    </h3>
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
                      <div className="services__row-promo">                     
                        {selectedObject.promo}
                      </div>  
                      <div className="services__row-comparison">
                          <CompareImage
                            leftImage={selectedObject.imgBefore}
                            rightImage={selectedObject.imgAfter}
                          />
                      </div>
                    </div>  
                  </div>
                </div>

                <div
                  className={
                    showChapter === "tab2"
                      ? "services__chapter-item active"
                      : "services__chapter-item"
                  }
                >
                  <div className="services__row-info--modal">
                  <h3 className="services__row-type--modal">
                    {selectedObject.service}
                  </h3>

                    {/* <div className="services__row-stages--img">
                      <img
                        src="/img/director.png"
                        alt="director"
                        className="services__row-info--manager"
                      />
                    </div> */}
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
                    <div className="services__row-promo">
                      {selectedObject.about1}
                    </div>

                  </div>
                </div>

                <div
                  className={
                    showChapter === "tab3"
                      ? "services__chapter-item active"
                      : "services__chapter-item"
                  }
                >
                  <div className="services__row-info--modal">
                    <h3 className="services__row-type--modal">
                      {selectedObject.service}
                    </h3>

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

                    <div className="services__row-promo">
                      {selectedObject.about2}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
