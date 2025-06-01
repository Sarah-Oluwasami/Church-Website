"use client"; // Add this directive at the very top
import React, { useState } from "react";
import "./Carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface Slide {
  image: string;
  text: string;
  miniText: string;
  reference: string;
}

const slides: Slide[] = [
  {
    image: "/images/church-boys.jpeg",
    text: " Even Thus Shall It Be In The Day When The ",
    miniText: "Son Of Man Is Revealed.",
    reference: "ST. Luke 17:30 ",
  },
  {
    image: "/images/church-women1.jpeg",
    text: " Thy word is a lamp unto my feet,",
    miniText: "and a light unto my path.",
    reference: "Psalm 119:105 ",
  },
  {
    image: "/images/church-women2.jpeg",
    text: " Jesus Christ The same yesterday,",
    miniText: "today, and forever.",
    reference: "Hebrews 13:8",
  },
  {
    image: "/images/church-kids.jpeg",
    text: " Seek the lord and his strength, ",
    miniText: "seek his face continually.",
    reference: "1 colossians 3:2",
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div
        className="carousel-slide lg:h-[700px] max-lg:h-[500px]"
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
      >
        <div className="carousel-overlay"></div>
        <article className="carousel-text capitalize sm:w-[65%] ">
          <blockquote className="max-lg:text-4xl  lg:text-6xl ">
            {slides[currentIndex].text}{" "}
            <span className="text-[#d6c590] ">
              {slides[currentIndex].miniText}
            </span>
          </blockquote>

          <p className="text-white text-xl font-sans font-normal my-7">
            {slides[currentIndex].reference}
          </p>

          <button className="border-[1px] border-[#d6c590] my-2">
            {" "}
            <p className="bg-[#d6c590] m-2 text-amber-950 px-10 py-4 uppercase ">
              {" "}
              Bible Verses
            </p>
          </button>
        </article>

        <button
          className="prev-button max-sm:py-0 max-sm:px-2 py-2 px-4 left-2  mx-20 max-sm:mx-0"
          onClick={prevSlide}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button
          className="next-button max-sm:py-0 max-sm:px-2 py-2 px-4 mx-20 max-sm:mx-0"
          onClick={nextSlide}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
