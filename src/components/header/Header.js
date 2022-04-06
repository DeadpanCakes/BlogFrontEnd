import { Link } from "react-router-dom";

import Profile from "./Profile";

const Header = ({loggedUser}) => {
  const styleClasses = "flex p-5 bg-[#111D4A] text-darkFont text-2xl";
  const logoStyle = "hover:drop-shadow-darkxl";

  return (
    <header className={styleClasses}>
      <Link className={logoStyle} to="/">
        <h1>Blog</h1>
      </Link>
      {loggedUser ? <Profile /> : <button>Log In</button>}
    </header>
  );
};

export default Header;
