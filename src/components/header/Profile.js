import AuthContext from "../context/AuthContext";
import useUsers from "../../hooks/useUsers";

const Profile = () => {
  const { findUser } = useUsers();

  return (
    <AuthContext.Consumer>
      {(authData) => {
        const firstName = findUser(authData.loggedUser._id);
        return <button>Welcome, {firstName}</button>;
      }}
    </AuthContext.Consumer>
  );
};

export default Profile;
