import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useUsers from "../../hooks/useUsers";
import fetchRecentActivity from "../../utils/fetchRecentActivity";
import RecentActivity from "./RecentActivity";

const User = () => {
  const { userid } = useParams();
  const { users, findUser } = useUsers();
  const [user, setUser] = useState({});
  const [activity, setActivity] = useState([]);
  useEffect(() => {
    if (users.length > 0) {
      setUser(findUser(userid));
    }
  }, [users, userid, findUser]);
  useEffect(() => {
    if (user._id) {
      fetchRecentActivity(user._id).then((activity) => {
        setActivity([...activity.posts, ...activity.comments]);
      });
    }
  }, [user]);
  const styleClasses = "w-full p-14 text-slate-700";
  return (
    <div className={styleClasses}>
      <h2>{`${user.username}#${user._id}`}</h2>
      <p>{user.fullName}</p>
      <button onClick={() => console.log(activity)}>clock</button>
      <ul>
        {activity.map((activity) => {
          return <RecentActivity key={activity._id} activity={activity} />;
        })}
      </ul>
    </div>
  );
};

export default User;
