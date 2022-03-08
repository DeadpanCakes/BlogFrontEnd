import { useParams } from "react-router-dom";

import sampleUsers from "../../datasets/users";

const User = () => {
  const { userid } = useParams();
  const userData = sampleUsers.find((user) => user._id.toString() === userid);
  return (
    <div>
      <h2>{`${userData.username}#${userData._id}`}</h2>
      <p>{userData.fullName}</p>
    </div>
  );
};

export default User;
