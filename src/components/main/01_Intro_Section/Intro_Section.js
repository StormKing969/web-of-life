import React from "react";
import Navbar from "../../core/Navbar/Navbar";
import Bg01 from "./images/bg01.jpg";
import Bg02 from "./images/bg02.jpg";
import Bg03 from "./images/bg03.jpg";
import { ImFacebook } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade } from "swiper";

import "./Intro_Section.scss";
import { Link } from "react-router-dom";

const Intro_Section = () => {
  return (
    <div className="intro_container">
      <div className="overlay">
        <div className="header_nav">
          <Navbar></Navbar>
        </div>

        <div className="intro_bg">
          <Swiper
            spaceBetween={1000}
            effect={"fade"}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFade]}
            className="mySwiper custom_size"
          >
            <SwiperSlide>
              <img src={Bg01} alt="Elephant" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Bg02} alt="Tea Plantation" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Bg03} alt="Train Tracks" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="intro_content">
          <h1>
            We Can Change the <br></br> World Together
          </h1>
          <p>
            Our world is a beautiful place and it has sustained <br></br>
            everything living on it for millions of years
          </p>
          <div className="intro_content_button">
            <Link to="/info">Learn More</Link>
          </div>

          <div className="social_links">
            <ul>
              <li>
                <a href="/">
                  <ImFacebook />
                </a>
              </li>
              <li>
                <a href="/">
                  <FiInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro_Section;
