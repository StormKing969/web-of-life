import React from "react";
import Data from "./data";
import Pollution from "./images/pollution.jpg"
import Fungi from "./images/fungi.jpg"
import Wood from "./images/wood.jpg"
import Oil from "./images/oil.jpg"
import "./Facts_Section.scss";

const Facts_Section = () => {
  return (
    <div className="facts_container">
      <div className="environmental_container_info">
        <h1 className="environmental_container_title">Fun Facts About The Environment</h1>
        <p className="environmental_container_subtitle">
          This world is a wonderful place with numerous mysteries within it.
          Though our environment has self-healing power, it is not a black hole
          that will not ever react to the harms caused by its population.
        </p>
      </div>

      <div className="environmental_cards_container">
        <div className="environmental_card_01">
          <div className="environmental_card_info environmental_color_grey">
            <p className="environmental_content">{Data[0].Fact}</p>
          </div>
          <div className="environmental_card_img">
            <img src={Pollution} alt="pollution" />
          </div>
          <div className="environmental_card_img_bg">
            <img src={Pollution} alt="pollution" />
          </div>
        </div>

        <div className="environmental_card_02">
          <div className="environmental_card_info environmental_color_green">
            <p className="environmental_content">{Data[1].Fact}</p>
          </div>
          <div className="environmental_card_img">
            <img src={Fungi} alt="fungi" />
          </div>
          <div className="environmental_card_img_bg">
            <img src={Fungi} alt="fungi" />
          </div>
        </div>

        <div className="environmental_card_03">
          <div className="environmental_card_info environmental_color_brown">
            <p className="environmental_content">{Data[2].Fact}</p>
          </div>
          <div className="environmental_card_img">
            <img src={Wood} alt="wood" />
          </div>
          <div className="environmental_card_img_bg">
            <img src={Wood} alt="wood" />
          </div>
        </div>

        <div className="environmental_card_04">
          <div className="environmental_card_info environmental_color_blue">
            <p className="environmental_content">{Data[3].Fact}</p>
          </div>
          <div className="environmental_card_img">
            <img src={Oil} alt="oil" />
          </div>
          <div className="environmental_card_img_bg">
            <img src={Oil} alt="oil" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts_Section;
