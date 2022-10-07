import React from "react";
import "./Mission_Section.scss";

const Mission_Section = () => {
  return (
    <div className="mission_container">
      <div className="mission_content">
        <h1>Mission Statement</h1>
        <p>
          Our priority is to keep the diversity of life on the region safe{" "}
          <br></br> from the threats of the ecological crisis
        </p>
      </div>

      <div className="mission_groups">
        <div className="animal_group"></div>
        <div className="people_group"></div>
        <div className="land_group"></div>
        <div className="nature_group"></div>
      </div>
    </div>
  );
};

export default Mission_Section;
