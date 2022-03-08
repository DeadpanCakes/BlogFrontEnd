import sampleUsers from "../../datasets/users";

import UserListing from "./UserListing";

const UserList = () => {
  return (
    <div>
      <h1>This is a list of users</h1>
      <ul>
        {sampleUsers.map((user) => {
          return <UserListing key={user._id} user={user} />;
        })}
      </ul>
    </div>
  );
};

export default UserList;
