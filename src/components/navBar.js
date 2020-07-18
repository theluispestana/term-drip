import React, { useState, useEffect } from "react";
import "styles/navBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    // eslint-disable-next-line
    setToken(localStorage.getItem("token"));
  });

  const logOut = () => {
    localStorage.clear();
    setToken("");
  };

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
          {!token ? (
            <li>
              <Link to={"/"}>Sign Up</Link>
            </li>
          ) : (
            <Link to="/">
              <li onClick={logOut}>Log Out</li>
            </Link>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
