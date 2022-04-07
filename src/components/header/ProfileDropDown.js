import { Link } from "react-router-dom";

const ProfileDropDown = ({ user, isDisplayed }) => {
  const containerStyle = "absolute right-0.5";
  const display = isDisplayed ? "flex flex-col" : "hidden";
  const navStyle = "bg-darkBG border-2 px-10 rounded-sm " + display;

  return (
    <div className={containerStyle}>
      <nav className={navStyle}>
        <Link to={`/users/${user._id}`}>Profile</Link>
        <Link to="/">Posts</Link>
        <button>Logout</button>
      </nav>
    </div>
  );
};

export default ProfileDropDown;
