import React from "react";
import { useInputChange } from "helpers/useInputChange";

const Welcome = () => {
  const [input, handleInputChange] = useInputChange();

  console.log(input);
  return (
    <div id="welcome-container">
      <div id="information">
        <p>Information about the site</p>
      </div>
      <div id="login">
        <h1>Login In</h1>
        <form>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            value={input.username}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="password">Password: </label>
          <input
            type="text"
            name="password"
            value={input.password}
            onChange={handleInputChange}
          />
          <br />
          <button></button>
        </form>
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
            type="text"
            name="newPassword"
            value={input.newPassword}
            onChange={handleInputChange}
          />
          <br />
          <button></button>
        </form>
      </div>
    </div>
  );
};

export default Welcome;
