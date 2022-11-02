import React, { useState } from "react";
import Botany_Img from "./images/trees.jpg";
import People_Img from "./images/people.jpg";
import Wildlife_Img from "./images/wildlife.jpg";
import Full_Botany_Img from "./images/full_trees.jpg";
import Full_People_Img from "./images/full_people.jpg";
import Full_Wildlife_Img from "./images/full_wildlife.jpg";
import "./Mission_Section.scss";

const Mission_Section = () => {
  const [botanyClicked, setBotanyClicked] = useState(false);
  const [wildlifeClicked, setWildlifeClicked] = useState(false);
  const [peopleClicked, setPeopleClicked] = useState(false);

  console.log(botanyClicked);

  return (
    <div className="mission_container">
      <div className="mission_content">
        <h1>Mission Statement</h1>
        <p>“Dream, explore, and discover… journey into a rich biodiversity”</p>
      </div>

      <div className="mission_groups">
        <div
          className="botany_group fix_bg"
          onClick={() => {
            setBotanyClicked(!botanyClicked);
          }}
        >
          <div
            className={`${
              botanyClicked ? "botany_group_display" : "botany_group_close"
            }`}
            onClick={() => {
              setBotanyClicked(!botanyClicked);
            }}
          >
            <div className="botany_group_display_img">
              <img src={Full_Botany_Img} alt="trees" />
            </div>
            <div className="botany_info">
              <p>
                Legend says that trees hum a soul-enriching song with the secret
                to a healthy life for those willing to listen. At Wasgamuwa,
                those who listen will first see with their eyes that legend is
                indeed reality.
              </p>
              <br />
              <p>
                Home to a diverse botanical landscape, from the smallest
                seedling to the largest tree, each greenery has its carefully
                crafted place. At the Web of Life, we thrive to practice
                holistic conservation methods that will allow us to cultivate
                the land without destroying the plants around us.
              </p>
              <br />
              <p>
                Who is to say that somewhere in this ethereal botany lies not
                the song we dream to hear?
              </p>
            </div>
          </div>
          <div className="botany_img">
            <img src={Botany_Img} alt="trees" />
          </div>
          <h3>Ethereal Botany</h3>
        </div>

        <div
          className="wildlife_group fix_bg"
          onClick={() => {
            setWildlifeClicked(!wildlifeClicked);
          }}
        >
          <div
            className={`${
              wildlifeClicked
                ? "wildlife_group_display"
                : "wildlife_group_close"
            }`}
            onClick={() => {
              setWildlifeClicked(!wildlifeClicked);
            }}
          >
            <div className="wildlife_group_display_img">
              <img src={Full_Wildlife_Img} alt="wildlife" />
            </div>
            <div className="wildlife_info">
              <p>
                In the recent years, Man has understood the need for a reversal
                of heart, and we are attempting to reintegrate with our
                wildlife. In fact, in this area, one of the biggest challenges
                is disintegrating the human-elephant conflict. According to the
                Sri Lankan Wildlife Conservation, each year, about 80 humans and
                about 250 elephants are killed due to human-elephant conflicts.
              </p>
              <br />
              <p>
                This land provides us an opportunity to communicate and listen
                to the wildlife, to understand their way of life and consider
                their place when writing our song.
              </p>
              <br />
              <p>
                When the melody is naturally intricate, what we explore is
                greatness!
              </p>
            </div>
          </div>
          <div className="wildlife_img">
            <img src={Wildlife_Img} alt="wildlife" />
          </div>
          <h3>Wildlife</h3>
        </div>

        <div
          className="people_group fix_bg"
          onClick={() => {
            setPeopleClicked(!peopleClicked);
          }}
        >
          <div
            className={`${
              peopleClicked ? "people_group_display" : "people_group_close"
            }`}
            onClick={() => {
              setPeopleClicked(!peopleClicked);
            }}
          >
            <div className="people_group_display_img">
              <img src={Full_People_Img} alt="people" />
            </div>
            <div className="people_info">
              <p>
                Sometimes you come across a community of people that provides
                perspective into the nuances of life. In rural Sri Lanka, people
                have often found developed ingenious ways to live sustainably.
                Away from the hustle and bustle of the city, one can discover a
                culture that in their daily lives, consciously consider the
                footprint they leave behind.
              </p>
            </div>
          </div>
          <div className="people_img">
            <img src={People_Img} alt="people" />
          </div>
          <h3>People</h3>
        </div>
      </div>
    </div>
  );
};

export default Mission_Section;
