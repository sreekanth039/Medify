import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import { Box, Container } from "@mui/material";
import img1 from "../../assets/offer1.png";
import img2 from "../../assets/offer2.png";
import "swiper/css/pagination";
import "swiper/css/navigation";

const offers = [
  { img: img1 },
  { img: img2 },
  { img: img2 },
  { img: img1 },
  { img: img1 },
  { img: img2 },
];

const HeroOffers = () => {
  return (
    <Box marginBottom={5} marginTop={5}>
      <Container>
        <Swiper
          className="doctor-swiper"
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          centeredSlides={true}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            767: {
              slidesPerView: 3,
            },
          }}
        >
          {offers.map((off, index) => {
            return (
              <SwiperSlide key={index}>
                <Box src={off.img} component={"img"} width={1} mb={2} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </Box>
  );
};

export default HeroOffers;
