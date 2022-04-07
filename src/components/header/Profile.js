import { useEffect, useState } from "react";

import useUsers from "../../hooks/useUsers";

const Profile = ({ loggedUser }) => {
  const { users, findUser } = useUsers();
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(findUser(loggedUser._id));
  }, [users, findUser, loggedUser]);
  return <button>{user ? `Welcome, ${user.firstName}` : "Loading"}</button>;
};

export default Profile;
