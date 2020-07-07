import React, { useState } from "react";
import Login from "components/login";
import "styles/welcome.css";
import { useInputChange } from "helpers/useInputChange";
import { loginUser, postUser } from "helpers/requests";
import { useHistory } from "react-router-dom";
import SignUp from "components/signup";
import SiteInfo from "components/siteInfo";

const Welcome = () => {
  const [input, handleInputChange] = useInputChange();
  const history = useHistory();
  const [loginErr, setLoginErr] = useState("");
  const [signUpErr, setSignUpErr] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(input.username, input.password)
      .then((json) => {
        localStorage.setItem("token", json.jwt);
        history.push("/build");
      })
      .catch((error) => {
        console.log(error);
        setLoginErr("username or password is incorrect");
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    postUser(input.newUsername, input.newPassword, input.email)
      .then((json) => {
        localStorage.setItem("token", json.jwt);
        history.push("/build");
      })
      .catch((error) => {
        console.log(error);
        setSignUpErr("invalid signup");
      });
  };

  return (
    <div id="welcome-container">
      <SiteInfo />
      <div id="login">
        <Login
          username={input.username}
          password={input.password}
          error={loginErr}
          handleInputChange={handleInputChange}
          handleLogin={handleLogin}
        />
        <SignUp
          newUsername={input.newUsername}
          newPassword={input.newPassword}
          email={input.email}
          error={signUpErr}
          handleInputChange={handleInputChange}
          handleSignUp={handleSignUp}
        />
      </div>
    </div>
  );
};

export default Welcome;
