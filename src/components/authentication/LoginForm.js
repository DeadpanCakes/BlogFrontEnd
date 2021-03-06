import { useState } from "react";

import postData from "../../utils/postData";

const LoginForm = ({login}) => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const handleChange = (setState, newState) => {
    setState(newState);
  };
  const handleSumbit = () => {
    //construct data from state
    const userInfo = { username, password: pass };

    //fetch login api with data in body
    postData("https://still-depths-86703.herokuapp.com/api/login", userInfo)
      .then((res) => res.json())
      //receive jwt token
      .then((data) => {
        //place token in localstorage
        localStorage.setItem("jwt", data.token);
        login(data.token);
      })
      .catch((err) => console.error(err));
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
      <button>Submit</button>
    </form>
  );
};

export default LoginForm;
