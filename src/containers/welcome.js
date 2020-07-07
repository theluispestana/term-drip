import React from "react";
import Login from "components/login";
import "styles/welcome.css";
import { useInputChange } from "helpers/useInputChange";
import { loginUser } from "helpers/requests";

const Welcome = () => {
  const [input, handleInputChange] = useInputChange();

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(input.username, input.password).then((json) =>
      localStorage.setItem("token", json.jwt)
    );
  };

  const handleSignUp = (e) => {
    e.preventDefault();
  };

  return (
    <div id="welcome-container">
      <div id="information">
        <p>Information about the site</p>
      </div>
      <div id="login">
        <Login
          username={input.username}
          password={input.password}
          handleInputChange={handleInputChange}
          handleLogin={handleLogin}
        />
        <h1>Sign Up</h1>
        <form>
          <label htmlFor="newUsername">Username: </label>
          <input
            type="text"
            name="newUsername"
            value={input.newUsername}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            value={input.email}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="newPassword">Password: </label>
          <input
            type="password"
            name="newPassword"
            value={input.newPassword}
            onChange={handleInputChange}
          />
          <br />
          <button onClick={handleSignUp}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Welcome;
