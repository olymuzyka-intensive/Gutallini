import { useState } from "react";
import React from "react";
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { servicesArray } from "../constants/services";
import { Send } from "../components/Send/Send";

import CompareImage from "react-compare-image";
import { useParams } from "react-router-dom";
import { TelegramFormRequest } from "../components/TelegramForm/TelegramFormRequest";
// import Links from "../components/Links/Links";

import ScrollToTop from "../components/ScrollToTop";

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
      <ScrollToTop />

      <section className="promo">
        <div className="container">
          <div className="promo__row">
            {/* <Links /> */}
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
            <ul className="page__nav">
              <li className="page__nav-item">
                <a href="#before-after">До/После</a>
              </li>
              <li className="page__nav-item">
                <a href="#stages">Этапы работы</a>
              </li>
              <li className="page__nav-item">
                <a href="#questions">Вопросы</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="impotant">
        <div className="container">
          <div className="services__row-top">
            <div className="services__row-promo">{selectedObject.promo}</div>
          </div>
        </div>
      </section>

      <section className="services" id="before-after">
        <div className="container">
          <div
            key={selectedObject.id}
            className="services__row--page"
            data-info={selectedObject.id}
          >
            <h3 className="services__row-type--desc">
              <span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 22.3067C17.3929 22.3067 18.5702 21.8262 19.532 20.8653C20.4938 19.9044 20.9747 18.7271 20.9747 17.3333C20.9747 15.9396 20.4938 14.7622 19.532 13.8013C18.5702 12.8404 17.3929 12.3596 16 12.3587C14.6071 12.3578 13.4298 12.8387 12.468 13.8013C11.5062 14.764 11.0253 15.9413 11.0253 17.3333C11.0253 18.7253 11.5062 19.9027 12.468 20.8653C13.4298 21.828 14.6071 22.3089 16 22.308M16 20.9747C14.9644 20.9747 14.0987 20.6267 13.4027 19.9307C12.7067 19.2347 12.3587 18.3689 12.3587 17.3333C12.3587 16.2978 12.7067 15.432 13.4027 14.736C14.0987 14.04 14.9644 13.692 16 13.692C17.0356 13.692 17.9013 14.04 18.5973 14.736C19.2933 15.432 19.6413 16.2978 19.6413 17.3333C19.6413 18.3689 19.2933 19.2347 18.5973 19.9307C17.9013 20.6267 17.0356 20.9747 16 20.9747ZM6.15467 26.6667C5.54044 26.6667 5.028 26.4613 4.61733 26.0507C4.20667 25.64 4.00089 25.1271 4 24.512V10.1547C4 9.54044 4.20578 9.02799 4.61733 8.61733C5.02889 8.20666 5.54089 8.00088 6.15333 7.99999H10.0973L11.9187 6.01999C12.1116 5.80488 12.3458 5.63644 12.6213 5.51466C12.8978 5.39377 13.1907 5.33333 13.5 5.33333H18.5C18.8093 5.33333 19.1022 5.39422 19.3787 5.516C19.6542 5.63688 19.8884 5.80533 20.0813 6.02133L21.904 7.99999H25.848C26.4613 7.99999 26.9738 8.20577 27.3853 8.61733C27.7969 9.02888 28.0018 9.54133 28 10.1547V24.5133C28 25.1267 27.7947 25.6391 27.384 26.0507C26.9733 26.4622 26.4609 26.6676 25.8467 26.6667H6.15467ZM16 25.3333H25.8467C26.0858 25.3333 26.2822 25.2564 26.436 25.1027C26.5898 24.9489 26.6667 24.7524 26.6667 24.5133V10.1533C26.6667 9.91422 26.5898 9.71777 26.436 9.56399C26.2822 9.41022 26.0858 9.33333 25.8467 9.33333H21.3173L18.8587 6.66666H16V25.3333Z"
                    fill="#D99B3F"
                  />
                </svg>
              </span>
              До/после
            </h3>

            <div className="services__row-bottom">
              <div className="services__row-content">
                <div className="btn btn--call" onClick={openModal}>
                  Оставить заявку
                </div>
                <TelegramFormRequest isOpen={showModal} onClose={closeModal} />

                <div className="services__row-about">
                  {selectedObject.about1}
                </div>
              </div>

              <div className="services__row-comparison">
                <CompareImage
                  leftImage={selectedObject.imgBefore}
                  rightImage={selectedObject.imgAfter}
                />
              </div>
            </div>
            <section className="impotant">
              <div className="container">
                <div className="services__row-promo">
                  {selectedObject.about2}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="stages" id="stages">
        <div className="container">
          <div className="stages__service">
            <h3 className="services__row-type--desc">
              <span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.3333 16V26.6667H18C17.6318 26.6667 17.3333 26.9651 17.3333 27.3333C17.3333 27.7015 17.6319 28 18 28H26.6667V18.6667H28V29.3333H17.2626C16.5653 29.3333 16 28.7593 16 28.0513V17.2821C16 16.5739 16.5653 16 17.2626 16H25.3333ZM21.6667 21.3333H19.6667L19.6696 25.3424L21.6667 25.3333V21.3333ZM24 4V14.6666H17.3333C15.8753 14.6666 14.6906 15.8368 14.6671 17.2892L14.6667 17.3333H6.66669V22.6667L14.6666 22.6666V25.3333H4V10L12 14.6667V10L20 14.6667V4H24ZM20.6667 17.4667C20.0039 17.4667 19.4667 18.0039 19.4667 18.6667C19.4667 19.3294 20.0039 19.8667 20.6667 19.8667C21.3294 19.8667 21.8667 19.3294 21.8667 18.6667C21.8667 18.0039 21.3294 17.4667 20.6667 17.4667Z"
                    fill="#D99B3F"
                  />
                </svg>
              </span>
              Этапы работы
            </h3>

            <ul className="services__row-stages">
              {selectedObject.stages.map((item) => (
                <li key={item.idx} className="services__row-stage">
                  <div className="services__row-stage--title">{item.stage}</div>
                  <div className="services__row-stage--text">{item.text}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="questions" id="questions">
        <div className="container">
          <div className="questions__service">
            <h3 className="services__row-type--desc">
              <span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_30_42)">
                    <path
                      d="M12.5714 3.42857C10.8172 3.42824 9.09209 3.87656 7.56 4.73091C6.02791 5.58527 4.73979 6.81726 3.81807 8.30979C2.89634 9.80232 2.37166 11.5058 2.29388 13.2583C2.21611 15.0107 2.58783 16.754 3.37371 18.3223L2.336 22.1954C2.27141 22.4375 2.27161 22.6922 2.33658 22.9342C2.40154 23.1761 2.52899 23.3967 2.70613 23.5739C2.88326 23.751 3.10387 23.8785 3.34581 23.9434C3.58775 24.0084 3.84252 24.0086 4.08457 23.944L7.95542 22.9086C9.34272 23.6043 10.8695 23.9771 12.4213 23.999C13.9731 24.0209 15.5098 23.6913 16.9162 23.035C18.3225 22.3787 19.5622 21.4126 20.5422 20.2091C21.5221 19.0057 22.2171 17.5961 22.5749 16.0859C22.9328 14.5758 22.9443 13.0042 22.6085 11.489C22.2727 9.97374 21.5984 8.55415 20.6361 7.33653C19.6738 6.11892 18.4484 5.13485 17.0517 4.45807C15.6551 3.78129 14.1234 3.42933 12.5714 3.42857ZM12.5714 20C12.2683 20 11.9776 19.8796 11.7633 19.6653C11.549 19.4509 11.4286 19.1603 11.4286 18.8571C11.4286 18.554 11.549 18.2634 11.7633 18.049C11.9776 17.8347 12.2683 17.7143 12.5714 17.7143C12.8745 17.7143 13.1652 17.8347 13.3795 18.049C13.5939 18.2634 13.7143 18.554 13.7143 18.8571C13.7143 19.1603 13.5939 19.4509 13.3795 19.6653C13.1652 19.8796 12.8745 20 12.5714 20ZM10.8571 10.5783C10.8562 10.8056 10.7651 11.0233 10.6037 11.1834C10.4423 11.3435 10.2239 11.4329 9.99657 11.432C9.76924 11.4311 9.55158 11.3399 9.39148 11.1785C9.23138 11.0171 9.14194 10.7988 9.14285 10.5714V10.5497C9.14398 10.5013 9.14665 10.4529 9.15085 10.4046C9.18996 9.9141 9.33418 9.43779 9.57371 9.008C10.0446 8.17372 10.9691 7.42857 12.5714 7.42857C14.1737 7.42857 15.0994 8.17372 15.568 9.008C15.8263 9.47002 15.9742 9.98558 16 10.5143L16.0011 10.5714V10.5726C16.0011 11.8571 15.2103 12.7211 14.6377 13.3474L14.4949 13.504C13.8709 14.1966 13.4297 14.7726 13.4297 15.7154C13.4297 15.9428 13.3394 16.1608 13.1787 16.3215C13.0179 16.4823 12.7999 16.5726 12.5726 16.5726C12.3452 16.5726 12.1272 16.4823 11.9665 16.3215C11.8057 16.1608 11.7154 15.9428 11.7154 15.7154C11.7154 14.0869 12.56 13.0914 13.2217 12.3566L13.2423 12.3337C13.9383 11.56 14.2846 11.176 14.2869 10.5794V10.576C14.2713 10.3214 14.199 10.0734 14.0754 9.85029C13.9006 9.54057 13.5394 9.14286 12.5714 9.14286C11.6034 9.14286 11.2423 9.54057 11.0686 9.84915C10.9445 10.0733 10.8722 10.3225 10.8571 10.5783ZM19.4286 28.5714C17.9743 28.573 16.5364 28.2655 15.21 27.6693C13.8836 27.0731 12.699 26.2018 11.7349 25.1131C12.5388 25.1723 13.3467 25.1463 14.1451 25.0354C15.652 26.2182 17.5129 26.8599 19.4286 26.8571C20.8623 26.8595 22.2734 26.5002 23.5314 25.8126C23.7252 25.7066 23.9525 25.6796 24.1657 25.7371L27.88 26.7314L26.8834 23.0149C26.8265 22.8023 26.8535 22.576 26.9589 22.3829C27.6425 21.1255 28.0005 19.7169 28 18.2857C28.0004 16.764 27.5957 15.2696 26.8275 13.956C26.0592 12.6424 24.9551 11.5571 23.6286 10.8114C23.4233 10.0313 23.136 9.27507 22.7714 8.55543C24.1585 9.03234 25.4275 9.80026 26.4935 10.8077C27.5595 11.8151 28.3979 13.0388 28.9523 14.3967C29.5067 15.7547 29.7645 17.2154 29.7083 18.6811C29.652 20.1467 29.2831 21.5834 28.6263 22.8949L29.664 26.7669C29.7287 27.009 29.7285 27.2639 29.6635 27.506C29.5985 27.7481 29.4709 27.9688 29.2936 28.146C29.1163 28.3231 28.8955 28.4506 28.6534 28.5154C28.4113 28.5803 28.1564 28.5803 27.9143 28.5154L24.0446 27.48C22.6119 28.1985 21.0313 28.5722 19.4286 28.5714ZM14.2857 10.5783V10.5806V10.5749"
                      fill="#D99B3F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_30_42">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              Часто задаваемые вопросы
            </h3>
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
        </div>
      </section>
      <Send isActive={false} />
    </>
  );
}

export default ServicePage;
