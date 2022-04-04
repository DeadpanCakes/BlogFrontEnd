import { useState } from "react";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirst] = useState("");
  const [lastName, setLastName] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirm] = useState("");
  const handleChange = (setState, newState) => {
    setState(newState);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        //construct data from state
        //fetch login api with data in body
        //receive jwt token
        //place token in localstorage
      }}
    >
      <label htmlFor="username">Username</label>
      <input
        name="username"
        id="username"
        value={username}
        onChange={(e) => handleChange(setUsername, e.target.value)}
      ></input>
      <label htmlFor="firstName">First Name</label>
      <input
        name="firstName"
        id="firstName"
        value={firstName}
        onChange={(e) => handleChange(setFirst, e.target.value)}
      ></input>
      <label htmlFor="lastName">Last Name</label>
      <input
        name="lastName"
        id="lastName"
        value={lastName}
        onChange={(e) => handleChange(setLastName, e.target.value)}
      ></input>
      <label htmlFor="password">Password</label>
      <input
        name="password"
        id="password"
        value={pass}
        onChange={(e) => handleChange(setPass, e.target.value)}
        type="password"
      ></input>
      <label htmlFor="confirmPass">Confirm Password</label>
      <input
        name="confirmPass"
        id="confirmPass"
        value={confirmPass}
        onChange={(e) => handleChange(setConfirm, e.target.value)}
        type="password"
      ></input>
    </form>
  );
};

export default SignUpForm;
