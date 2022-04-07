import { useEffect, useState } from "react";

import useUsers from "../../hooks/useUsers";
import ProfileDropDown from "./ProfileDropDown";

const Profile = ({ loggedUser }) => {
  const { users, findUser } = useUsers();
  const [user, setUser] = useState(null);
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prevState) => !prevState);

  useEffect(() => {
    setUser(findUser(loggedUser._id));
  }, [users, findUser, loggedUser]);
  return (
    <div className="relative">
      <button onClick={toggleClicked}>
        {user ? `Welcome, ${user.firstName}` : "Loading"}
      </button>
      <ProfileDropDown isDisplayed={clicked} user={{_id: 1}}/>
    </div>
  );
};

export default Profile;
