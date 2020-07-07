import React from "react";

const Login = (props) => {
  const { username, password, handleInputChange, handleLogin, error } = props;
  return (
    <>
      <h1>Login In</h1>
      {error ? <p style={{ color: "red" }}>{error}</p> : null}
      <form>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <br />
        <button onClick={handleLogin}>Login</button>
      </form>
    </>
  );
};

export default Login;
