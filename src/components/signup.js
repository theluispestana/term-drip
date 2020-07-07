import React from "react";

const SignUp = (props) => {
  const {
    newUsername,
    email,
    newPassword,
    error,
    handleInputChange,
    handleSignUp,
  } = props;

  return (
    <div>
      <h1>Sign Up</h1>
      {error ? <p style={{ color: "red" }}>{error}</p> : null}
      <form>
        <label htmlFor="newUsername">Username: </label>
        <input
          type="text"
          name="newUsername"
          value={newUsername}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="newPassword">Password: </label>
        <input
          type="password"
          name="newPassword"
          value={newPassword}
          onChange={handleInputChange}
        />
        <br />
        <button onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
