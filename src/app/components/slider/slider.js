"use client";

import Slider from "react-slick";
import Image from "next/image";

import styles from "./slider.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,

    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 2500,

    arrows: true,
  };

  return (
    <div className={styles.sliderWrapper}>
      <Slider {...settings}>
        {images?.map((img, index) => (
          <div className={styles.slide} key={index}>
            <Image
              src={img}
              alt={`product-${index}`}
              width={600}
              height={500}
              className={styles.slideImage}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}