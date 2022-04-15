import { Link } from "react-router-dom";

import AuthContext from "../context/AuthContext";

const ProfileDropDown = ({ isDisplayed }) => {
  const containerStyle = "absolute right-0.5";
  const display = isDisplayed ? "flex flex-col" : "hidden";
  const navStyle = "bg-darkBG border-2 rounded-sm " + display;
  const linkStyle = "px-10 hover:bg-highlight hover:text-black";

  return (
    <AuthContext.Consumer>
      {(authData) => {
        const { loggedUser, logoutUser } = authData;
        return (
          <div className={"profileDropdown " + containerStyle}>
            <nav className={navStyle}>
              <Link className={linkStyle} to={`/users/${loggedUser._id}`}>
                Profile
              </Link>
              <Link className={linkStyle} to="/">
                Posts
              </Link>
              <button className={linkStyle} onClick={logoutUser}>
                Logout
              </button>
            </nav>
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default ProfileDropDown;
