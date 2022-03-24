import { Link } from "react-router-dom";

import samplePosts from "../../datasets/posts";
import sampleComments from "../../datasets/comments";

const Sidebar = ({className}) => {
  return (
    <nav className={className}>
      <Link to="/posts">All posts</Link>
      <section>
        <h4>Recent Posts</h4>
        {samplePosts
          .sort((prevPost, currPost) => {
            return currPost.timestamp - prevPost.timestamp;
          })
          .slice(0, 3)
          .map((post) => {
            return (
              <li key={post._id}>
                <Link to={post.url}>{post.title}</Link>
              </li>
            );
          })}
      </section>
      <section>
        <h4>Recent Comments</h4>
        {sampleComments
          .sort((prevComment, currComment) => {
            return currComment.timestamp - prevComment.timestamp;
          })
          .slice(0, 3)
          .map((comment) => {
            return (
              <li key={comment._id}>
                <Link to={comment.url}>{comment.content}</Link>
              </li>
            );
          })}
      </section>
    </nav>
  );
};

export default Sidebar;
