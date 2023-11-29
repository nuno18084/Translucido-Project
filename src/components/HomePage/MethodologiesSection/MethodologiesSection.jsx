/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./MethodologiesSection.css";
import Arrow from "../../../Assets/HomePage/SolutionsAssets/SolutionsArrow.png";
import Imersao from "../../../Assets/HomePage/MethodologiesAssets/MethodologiesCartoons/Imersão.png";
import Sociodrama from "../../../Assets/HomePage/MethodologiesAssets/MethodologiesCartoons/Sociodrama.png";
import Story from "../../../Assets/HomePage/MethodologiesAssets/MethodologiesCartoons/StoryTelling.png";
import Design from "../../../Assets/HomePage/MethodologiesAssets/MethodologiesCartoons/DesignThinking.png";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const CustomPagination = ({ swiper }) => {
  useEffect(() => {
    if (!swiper || !swiper.slides) {
      return;
    }

    const updateActiveDot = () => {
      const activeDot = document.querySelector(".custom-pagination-dot.active");
      if (activeDot) {
        activeDot.classList.remove("active");
      }
      const newActiveDot = document.querySelector(
        `.custom-pagination-dot[data-index="${swiper.activeIndex}"]`
      );
      if (newActiveDot) {
        newActiveDot.classList.add("active");
      }
    };

    swiper.on("slideChange", updateActiveDot);

    return () => {
      swiper.off("slideChange", updateActiveDot);
    };
  }, [swiper]);

  if (!swiper || !swiper.slides) {
    return null;
  }

  const slides = Array.from({ length: swiper.slides.length });

  const handleDotClick = (index) => {
    swiper.slideTo(index);
  };

  return (
    <div className="custom-pagination">
      {slides.map((_, index) => (
        <div
          key={index}
          className={`custom-pagination-dot`}
          data-index={index}
          onClick={() => handleDotClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default function MethodologiesSection() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="methodologies-container">
      <div className="methodologies-main-section">
        <h1>Metedologias</h1>
      </div>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={1.5}
        centeredSlides={true}
        spaceBetween={10}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} custom-pagination-dot" data-index="${index}"></span>`;
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="methodologies-cards">
            <div>
              <h1>Imersão</h1>
              <p>
                Criar ambientes ilusórios para estimular os sentidos, aprofundar
                debates e despertar empatia ao compreender processos
                neurológicos subjacentes.
              </p>
              <div className="methodologies-arrow">
                <img src={Arrow} alt="arrow" />
              </div>
            </div>
            <div className="methodologies-cartoons">
              <img src={Imersao} alt="test" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="methodologies-cards">
            <div>
              <h1>Sociodrama</h1>
              <p>
                Utilizar dramatização para conscientizar grupos sobre questões,
                promovendo reflexão empática e explorando soluções sensíveis.
              </p>
              <div className="methodologies-arrow">
                <img src={Arrow} alt="arrow" />
              </div>
            </div>
            <div className="methodologies-cartoons">
              <img src={Sociodrama} alt="test" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="methodologies-cards">
            <div>
              <h1>Story telling</h1>
              <p>
                Criar ambientes ilusórios para estimular os sentidos, aprofundar
                debates e despertar empatia ao compreender processos
                neurológicos subjacentes.
              </p>
              <div className="methodologies-arrow">
                <img src={Arrow} alt="arrow" />
              </div>
            </div>
            <div className="methodologies-cartoons">
              <img src={Story} alt="test" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="methodologies-cards">
            <div>
              <h1>Design thinking</h1>
              <p>
                Criar ambientes ilusórios para estimular os sentidos, aprofundar
                debates e despertar empatia ao compreender processos
                neurológicos subjacentes.
              </p>
              <div className="methodologies-arrow">
                <img src={Arrow} alt="arrow" />
              </div>
            </div>
            <div className="methodologies-cartoons">
              <img src={Design} alt="test" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <CustomPagination swiper={swiperRef} />
    </div>
  );
}
