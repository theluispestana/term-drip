import React from "react";
import "styles/navBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="nav-bar">
      <h1>Terminal Drip</h1>
      <nav>
        <ul>
          <li>
            <Link to={"/build"}>Build</Link>
          </li>
          <li>
            <Link to={"/browse"}>Browse</Link>
          </li>
          <Link to={"/"}>
            <li>Sign Up</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
