import React from "react";
import "./index.scss";
import avatar from "../../images/avatar.jpg";


import { NavLink } from "react-router-dom";
function Navbar(props) {
  return (
    <div className="nav-title">
     
      <div className="avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="router">
        <ul>
          <li>
            <NavLink to="/">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/education">EDUCATION</NavLink>
          </li>
          <li>
            <NavLink to="/skill">SKILLS</NavLink>
          </li>
          <li>
            <NavLink to="/experience">EXPERIENCE</NavLink>
          </li>
          <li>
            <NavLink to="project">PROJECTS</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
