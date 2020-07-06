import React from "react";
import "styles/navBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="nav-bar">
      <h1>
        <Link to={"/"}>Terminal Drip</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to={"/build"}>Build</Link>
          </li>
          <li>
            <Link to={"/browse"}>Browse</Link>
          </li>
          <li>Sign Up</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
