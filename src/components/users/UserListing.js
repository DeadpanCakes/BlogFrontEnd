import { Link } from "react-router-dom";

const UserListing = ({ user }) => {
  const { _id: id, username, fullName, url } = user;
  return (
    <Link to={url}>
      <h3>{`${username}#${id}`}</h3>
      <p>{fullName}</p>
    </Link>
  );
};

export default UserListing;
