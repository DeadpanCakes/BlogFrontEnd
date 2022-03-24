import { Link } from "react-router-dom";

import samplePosts from "../../datasets/posts";

const PostList = ({beginning, end}) => {
  return samplePosts
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
    });
};

export default PostList;
