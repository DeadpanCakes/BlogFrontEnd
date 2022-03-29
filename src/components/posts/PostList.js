import { Link } from "react-router-dom";
import { format } from "date-fns";

import samplePosts from "../../datasets/posts";

const PostList = ({ beginning, end }) => {
  const listStyle = "list-none";
  const linkStyle = "flex flex-col px-5";
  const authorCredit = "self-end hover:underline";
  const postTitleStyle = "text-2xl hover:underline";
  return (
    <ul className={listStyle}>
      {samplePosts
        .sort((prevPost, currPost) => {
          return currPost.timestamp - prevPost.timestamp;
        })
        .slice(beginning, end)
        .map((post) => {
          return (
            <li key={post._id} className={linkStyle}>
              <Link to={post.url}>
                <p className={postTitleStyle}>{post.title}</p>
              </Link>
              <Link to={post.author.url} className={authorCredit}>
                <p>
                  by {post.author.username} on{" "}
                  {format(post.timestamp, "MM/dd/yyyy")} at
                  {format(post.timestamp, "hh:mm:ss a")}
                </p>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default PostList;
