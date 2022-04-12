import { Link } from "react-router-dom";

import AuthContext from "../context/AuthContext";

const ProfileDropDown = ({ isDisplayed }) => {
  const containerStyle = "absolute right-0.5";
  const display = isDisplayed ? "flex flex-col" : "hidden";
  const navStyle = "bg-darkBG border-2 px-10 rounded-sm " + display;

  return (
    <AuthContext.Consumer>
      {(authData) => {
        const { loggedUser, logoutUser } = authData;
        return (
          <div className={containerStyle}>
            <nav className={navStyle}>
              <Link to={`/users/${loggedUser._id}`}>Profile</Link>
              <Link to="/">Posts</Link>
              <button onClick={logoutUser}>Logout</button>
            </nav>
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default ProfileDropDown;
