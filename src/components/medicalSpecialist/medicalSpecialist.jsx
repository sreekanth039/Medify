import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import { Box, Typography } from "@mui/material";
import img1 from "../../assets/ahmad-stevens.png";
import img2 from "../../assets/ahmad.png";
import img3 from "../../assets/heena.png";
import img4 from "../../assets/ankur.png";
import SliderComponent from "./slidercomponent";
import "swiper/css/pagination";
import "swiper/css/navigation";

const doctors = [
  { img: img1, title: "Dr. Ahmad Stevens", designation: "Medicine" },
  { img: img2, title: "Dr. Ahmad Khan", designation: "Neurologist" },
  { img: img3, title: "Dr. Heena Sachdeva", designation: "Orthopadics" },
  { img: img4, title: "Dr. Ankur Sharma", designation: "Orthopadics" },
  { img: img3, title: "Dr. Heena Sachdeva", designation: "Orthopadics" },
  { img: img1, title: "Dr. Ahmad Stevens", designation: "Medicine" },
  { img: img4, title: "Dr. Ankur Sharma", designation: "Orthopadics" },
  { img: img2, title: "Dr. Ahmad Khan", designation: "Neurologist" },
  { img: img1, title: "Dr. Ahmad Stevens", designation: "Medicine" },
  { img: img3, title: "Dr. Heena Sachdeva", designation: "Orthopadics" },
];

const MedicalSpecialist = () => {
  return (
    <Box marginBottom={5}>
      <Typography
        variant="h1"
        color="#1B3C74"
        textAlign="center"
        fontWeight={600}
        fontSize={"48px"}
        mt={"3px"}
        marginBottom={"50px"}
      >
        Our Medical Specialist
      </Typography>
      <Swiper
        className="doctor-swiper"
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        centeredSlides={true}
        spaceBetween={20}
        slidesPerView={2}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          767: {
            slidesPerView: 4,
          },
        }}
      >
        {doctors.map((doc, index) => {
          return (
            <SwiperSlide key={index}>
              <SliderComponent
                Img={doc.img}
                Title={doc.title}
                Designation={doc.designation}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default MedicalSpecialist;
