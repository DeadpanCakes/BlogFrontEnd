import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const handleChange = (setState, newState) => {
    setState(newState);
  };
  const handleSumbit = () => {
    //construct data from state
    //fetch login api with data in body
    //receive jwt token
    //place token in localstorage
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSumbit();
      }}
    >
      <label htmlFor="username">Username</label>
      <input
        name="username"
        id="username"
        value={username}
        onChange={(e) => handleChange(setUsername, e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        name="password"
        id="password"
        value={pass}
        onChange={(e) => handleChange(setPass, e.target.value)}
        type="password"
      />
    </form>
  );
};

export default LoginForm;
