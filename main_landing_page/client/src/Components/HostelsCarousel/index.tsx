"use client";

"use client";

import React from "react";
import { Box } from "@mui/material";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

interface CarouselCardProps {
  img1: string;
  img2: string;
  img3: string;
}

function CarouselCard({ img1, img2, img3 }: CarouselCardProps) {
  return (
    <Box style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{ height: "33.33%", backgroundColor: "green", overflow: "hidden" }}
      >
        <img
          src={img1}
          alt="Hostel_img"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>
      <Box
        sx={{ height: "33.34%", backgroundColor: "blue", overflow: "hidden" }}
      >
        <img
          src={img2}
          alt="Hostel_img"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>
      <Box sx={{ height: "33.33%", overflow: "hidden" }}>
        <img
          src={img3}
          alt="Hostel_img"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>
    </Box>
  );
}

function HostelsCarousel() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      //   spaceBetween={50}
      slidesPerView={1}
      navigation
      //   pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      style={{ height: "500px", borderRadius: "10px" }}
    >
      <SwiperSlide>
        <CarouselCard
          img1="/assets/hostelm.jpg"
          img2="/assets/hostelh.png"
          img3="/assets/hostelb.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselCard
          img1="/assets/hostelh.png"
          img2="/assets/hostelb.jpg"
          img3="/assets/hostelm.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselCard
          img1="/assets/hostelm.jpg"
          img2="/assets/hostelh.png"
          img3="/assets/hostelb.jpg"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default HostelsCarousel;
