import React from "react";
import Data from "./data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

import "./Swiper.css";
import "./Testimonial_Section.scss";

const Testimonial_Section = () => {
  return (
    <div className="testimonial_container">
      <Swiper
        direction={"vertical"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {Data.map((ele, index) => (
          <SwiperSlide className="testimonial_card_container">
            <div className="testimonial_card" key={index}>
              <h2 className="title">WHAT PEOPLE SAY</h2>
              <p className="content">{ele.Review}</p>
              <div className="testimonial_card_pic_details">
                <div className="testimonial_card_pic">
                  <img src={ele.Picture} alt="user" />
                </div>
                <div className="testimonial_card_user_info">
                  <p className="testimonial_username">{ele.Name}</p>
                  <p className="testimonial_location">{ele.Location}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial_Section;
