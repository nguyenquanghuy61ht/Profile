import React from "react";
import "./index.scss";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MaleOutlinedIcon from "@mui/icons-material/MaleOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import git from "../../images/git.png";
import facebook from "../../images/facebook.png";

function About(props) {
  return (
    <div className="box-about">
      <div className="title">
        <h1>NGUYEN QUANG HUY</h1>
        <h4>ReactJS Developer</h4>
      </div>
      <div className="about">
        <h3>Introduction</h3>
        <ul>
          <li>
            <EmailOutlinedIcon className="icon" />
            <span>
              Email: <strong>huyn67811@gmail.com</strong>
            </span>
          </li>
          <li>
            <LocalPhoneOutlinedIcon className="icon" />
            <span>
              Phone:<strong>0853978268</strong>{" "}
            </span>
          </li>
          <li>
            <MaleOutlinedIcon className="icon" />
            <span>
              Gender: <strong>Male</strong>
            </span>
          </li>
          <li>
            <CalendarMonthOutlinedIcon className="icon" />
            <span>
              Date of birth: <strong>16/02/2001</strong>
            </span>
          </li>
          <li>
            <HomeOutlinedIcon className="icon" />
            <span>
              Address: <strong>Hanoi , Vietnam</strong>
            </span>
          </li>
          <li>
            <EmojiObjectsOutlinedIcon className="icon" />
            <span>Objective</span>
          </li>
        </ul>
        <div className="objective">
          <p>- Apply for reactjs internship position.</p>
          <p>- Develop yourself, hone your skills.</p>
          <p>- Start working on the project within 2 months.</p>
          <p>
            - <strong>Short-term:</strong> Become a Front-end developer ,
            participate in real projects.
          </p>
          <p>
            - <strong>Long-term:</strong> Become a fullstack developer.
          </p>
        </div>
      </div>

      <div className="link_Info">
        <a href="https://github.com/nguyenquanghuy61ht">
          <img src={git} alt="git" />
        </a>
        <a href="https://www.facebook.com/huy.huyt.7/">
          <img src={facebook} alt="face" />
        </a>
      </div>
    </div>
  );
}

export default About;
