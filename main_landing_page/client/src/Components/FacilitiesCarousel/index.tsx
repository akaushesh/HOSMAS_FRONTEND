"use client";

import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box } from "@mui/material";
import Card from "./Card";

function FacilitiesCarousel() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      style={{ height: "100%" }}
    >
      <SwiperSlide>
        <Card
          imagePath="/assets/hostelogym.png"
          description="Gymnasium equipped with state of the art equipment"
        />
      </SwiperSlide>

      <SwiperSlide>
        <Card
          even={true}
          imagePath="/assets/hostelemess.JPG"
          description="Mess equipped with state of the art food"
        />
      </SwiperSlide>

      <SwiperSlide>
        <Card
          imagePath="/assets/hostelogym.png"
          description="Gymnasium equipped with state of the art equipment"
        />
      </SwiperSlide>

      <SwiperSlide>
        <Card
          even={true}
          imagePath="/assets/hostelemess.JPG"
          description="Mess equipped with state of the art food"
        />
      </SwiperSlide>

      <SwiperSlide>
        <Card
          imagePath="/assets/hostelogym.png"
          description="Gymnasium equipped with state of the art equipment"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default FacilitiesCarousel;
