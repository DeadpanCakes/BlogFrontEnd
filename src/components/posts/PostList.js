import { Link } from "react-router-dom";

import samplePosts from "../../datasets/posts";

const PostList = ({ beginning, end }) => {
  const listStyle = "list-none";
  return (
    <ul className={listStyle}>
      {samplePosts
        .sort((prevPost, currPost) => {
          return currPost.timestamp - prevPost.timestamp;
        })
        .slice(beginning, end)
        .map((post) => {
          return (
            <li key={post._id}>
              <Link to={post.url}>{post.title}</Link>
            </li>
          );
        })}
    </ul>
  );
};

export default PostList;
