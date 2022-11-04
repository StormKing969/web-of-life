import React from "react";
import { Link } from "react-router-dom";
import { Chrono } from "react-chrono";
import AnimalShape from "./images/animal_shape.png";
import Orientation from "./images/orientation.jpg";
import FieldResearch from "./images/field_research.jpg";
import LocalWork from "./images/local_work.jpg";
import Research from "./images/research.jpg";
import data from "./data";
import "./Course_Section.scss";

const Course_Section = () => {
  return (
    <div className="course_container">
      <div className="section_img">
        <img src={AnimalShape} alt="animal shapes" />
      </div>
      <h1 className="course_section_title">Experience the Web of Life</h1>
      <div className="course_timeline">
        <Chrono
          items={data}
          mode="VERTICAL_ALTERNATING"
          theme={{
            primary: 'green',
            secondary: 'none',
            cardBgColor: 'white',
            cardForeColor: 'white',
            titleColor: 'rgb(41, 161, 41)',
            titleColorActive: 'rgb(41, 161, 41)',
          }}
          enableOutline 
          hideControls
          allowDynamicUpdate={true}
          disableAutoScrollOnClick
          disableClickOnCircle
        >
          <div className="card">
            <div className="card_img">
              <img src={Orientation} alt="orientation" />
            </div>
            <h1 className="card_title">Orientation</h1>
            <h3 className="card_subtitle">Getting accommodated:</h3>
            <ul className="card_tasks">
              <li>
                <p>Program time table</p>
              </li>
              <li>
                <p>Summary of field work</p>
              </li>
              <li>
                <p>Afternoon walk about</p>
              </li>
              <li>
                <p>
                  Relaxing evening at your accommodation (double room chalet
                  fully air conditioned with all modern facilities)
                </p>
              </li>
            </ul>
            <div className="course_link">
              <Link to="/courses">Learn more</Link>
            </div>
          </div>

          <div className="card">
            <div className="card_img">
              <img src={FieldResearch} alt="field research" />
            </div>
            <h1 className="card_title">Week 1</h1>
            <h3 className="card_subtitle">Introductory Tasks:</h3>
            <ul className="card_tasks">
              <li>
                <p>
                  Field work with setting Camera traps and working with in house
                  scientist
                </p>
              </li>
              <li>
                <p>
                  Reviewing camera traps and collecting data and analysis of
                  data with scientist
                </p>
              </li>
            </ul>
            <div className="course_link">
              <Link to="/courses">Learn more</Link>
            </div>
          </div>

          <div className="card">
            <div className="card_img">
              <img src={LocalWork} alt="local work" />
            </div>
            <h1 className="card_title">Week 2</h1>
            <h3 className="card_subtitle">Sustainability Program:</h3>
            <ul className="card_tasks">
              <li>
                <p>Visiting the native village of Dambana</p>
              </li>
              <li>
                <p>
                  Walkabout in the village understanding the life style, farming
                  methods and agriculture
                </p>
              </li>
              <li>
                <p>Data collection</p>
              </li>
            </ul>
            <div className="course_link">
              <Link to="/courses">Learn more</Link>
            </div>
          </div>

          <div className="card">
            <div className="card_img">
              <img src={Research} alt="research" />
            </div>
            <h1 className="card_title">Final Week</h1>
            <h3 className="card_subtitle">Research:</h3>
            <ul className="card_tasks">
              <li>
                <p>Visit to the knuckles Mountain range</p>
              </li>
              <li>
                <p>Study biodiversity</p>
              </li>
              <li>
                <p>
                  Tracking various environmental changes such as climate change,
                  landscape changes and temperature changes in SriLanka
                </p>
              </li>
            </ul>
            <div className="course_link">
              <Link to="/courses">Learn more</Link>
            </div>
          </div>
        </Chrono>
      </div>
    </div>
  );
};

export default Course_Section;
