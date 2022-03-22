import { useParams } from "react-router-dom";

import sampleUsers from "../../datasets/users";
import samplePosts from "../../datasets/posts";
import sampleComments from "../../datasets/comments";
import RecentActivity from "./RecentActivity";

const User = () => {
  const { userid } = useParams();
  const userData = sampleUsers.find((user) => user._id.toString() === userid);
  const publishedPosts = samplePosts.filter(post => post.isPublished)
  const recentActivity = [...publishedPosts, ...sampleComments].filter(
    (activity) => {
      return activity.author._id === userData._id;
    }
  ).sort((a,b) => b.timestamp - a.timestamp);
  return (
    <div>
      <h2>{`${userData.username}#${userData._id}`}</h2>
      <p>{userData.fullName}</p>
      <ul>
        {recentActivity.map((activity) => {
          return <RecentActivity key={activity._id} activity={activity} />;
        })}
      </ul>
    </div>
  );
};

export default User;
