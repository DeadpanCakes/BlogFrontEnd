import { Link } from "react-router-dom";

import samplePosts from "../../datasets/posts";

const PostList = ({ beginning, end }) => {
  const listStyle = "list-none";
  const linkStyle = "flex flex-col px-5"
  const authorCredit = "self-end"
  const postTitleStyle = "hover:underline"
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
              <Link to={post.url} className={linkStyle}>
                <p className={postTitleStyle}>{post.title}</p>
                <p className={authorCredit}>by {post.author.username}</p>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default PostList;
