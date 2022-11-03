import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiHandHeartLine } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";
import { GiEcology } from "react-icons/gi";
import { BsPlus } from "react-icons/bs";
import "./Connect_Section.scss";

const Connect_Section = () => {
  const [reachOutClicked, setReachOutClicked] = useState(true);
  const [investigateClicked, setInvestigateClicked] = useState(false);
  const [actClicked, setActClicked] = useState(false);

  console.log("reachOutClicked", reachOutClicked);
  console.log("investigateClicked", investigateClicked);
  console.log("actClicked", actClicked);

  return (
    <div className="connect_container">
      <div className="connect_container_content">
        <div className="connect_option">
          <div
            className="reach_out_section"
            onClick={() => {
              setReachOutClicked(true);
              setInvestigateClicked(false);
              setActClicked(false);
            }}
          >
            <FaHandsHelping />
            <h1>Connect</h1>
            <div
              className={`${
                reachOutClicked ? "plus_icon_active" : "plus_icon_inactive"
              }`}
            >
              <BsPlus />
            </div>
          </div>
          <div
            className="investigate_section"
            onClick={() => {
              setReachOutClicked(false);
              setInvestigateClicked(true);
              setActClicked(false);
            }}
          >
            <RiHandHeartLine />
            <h1>Investigate</h1>
            <div
              className={`${
                investigateClicked ? "plus_icon_active" : "plus_icon_inactive"
              }`}
            >
              <BsPlus />
            </div>
          </div>
          <div
            className="act_section"
            onClick={() => {
              setReachOutClicked(false);
              setInvestigateClicked(false);
              setActClicked(true);
            }}
          >
            <GiEcology />
            <h1>Act</h1>
            <div
              className={`${
                actClicked ? "plus_icon_active" : "plus_icon_inactive"
              }`}
            >
              <BsPlus />
            </div>
          </div>
        </div>

        <div className="connect_info">
          <div
            className={`${
              reachOutClicked ? "reach_out_info" : "reach_out_info_close"
            }`}
          >
            <h3 className="sub_title">START TODAY</h3>
            <span className="title">Connect</span>
            <p className="content">
              We work with people who support our idea of nature conservation.
            </p>
            <div className="contact_link">
              <Link to="/contact">COME...JOIN US</Link>
            </div>
          </div>

          <div
            className={`${
              investigateClicked ? "investigate_info" : "investigate_info_close"
            }`}
          >
            <h3 className="sub_title">START TODAY</h3>
            <span className="title">Investigate</span>
            <p className="content">
              Join our team and help us investigate the issues that causes
              disasters. We want to focus on minor things that lead to larger
              problems.
            </p>
            <div className="contact_link">
              <Link to="/contact">COME...JOIN US</Link>
            </div>
          </div>

          <div className={`${actClicked ? "act_info" : "act_info_close"}`}>
            <h3 className="sub_title">START TODAY</h3>
            <span className="title">Act</span>
            <p className="content">
              Acting now prevents the failure in the future.
            </p>
            <div className="contact_link">
              <Link to="/contact">COME...JOIN US</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect_Section;
