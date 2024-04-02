"use client";

import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import YouTube from "react-youtube";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box } from "@mui/material";

function LandingPageCarousel() {
  const opts = {
    height: "600px",
    width: "100%",
  };

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      style={{ height: "600px" }}
    >
      <SwiperSlide style={{ display: "flex", alignItems: "center" }}>
        <Box sx={{}}>
          <img
            src="assets/landing_image.png"
            style={{
              objectFit: "cover",
              width: "100%",
              objectPosition: "center",
            }}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <YouTube videoId="BFiHrUiae9M" opts={opts} />
      </SwiperSlide>
      {/* <SwiperSlide>
        <Box sx={{}}>
          <img
            src="assets/carousel1.png"
            style={{ objectFit: "cover", width: "100%" }}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box sx={{}}>
          <img
            src="assets/carousel1.png"
            style={{ objectFit: "cover", width: "100%" }}
          />
        </Box>
      </SwiperSlide> */}
    </Swiper>
  );
}

export default LandingPageCarousel;
