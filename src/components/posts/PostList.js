import { Link } from "react-router-dom";
import { format } from "date-fns";

import usePosts from "../../hooks/usePosts";

const PostList = ({ beginning, end }) => {
  const posts = usePosts();

  const listStyle = "list-none";
  const linkStyle = "flex flex-col px-5";
  const authorCredit = "self-end hover:underline";
  const postTitleStyle = "text-2xl hover:underline";
  return (
    <ul className={listStyle}>
      {posts
        .sort((prevPost, currPost) => {
          return currPost.timestamp - prevPost.timestamp;
        })
        .slice(beginning, end)
        .map((post) => {
          return (
            <li key={post._id} className={linkStyle}>
              <Link to={post.fetchUrl}>
                <p className={postTitleStyle}>{post.title}</p>
              </Link>
              <Link to={post.author.fetchUrl} className={authorCredit}>
                <p>
                  by {post.author.username} on{" "}
                  {format(new Date(post.timestamp), "MM/dd/yyyy")} at{" "}
                  {format(new Date(post.timestamp), "hh:mm:ss a")}
                </p>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default PostList;
