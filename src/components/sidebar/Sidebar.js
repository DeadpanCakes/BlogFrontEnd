import { Link } from "react-router-dom";

import PostList from "../posts/PostList";
import sampleComments from "../../datasets/comments";

const Sidebar = ({ className }) => {
  const sidebarStyle =
    "border-dark border-4 rounded-md flex flex-col min-h-[50vh]";
  const titleStyle = "text-3xl bg-highlight";
  const sectionStyle = "flex-1 flex flex-col list-none text-left";
  return (
    <nav className={className + " " + sidebarStyle}>
      <Link to="/posts" className={titleStyle + " bg-darkBG text-darkFont"}>
        All posts
      </Link>
      <section className={sectionStyle}>
        <h4 className={titleStyle}>Recent Posts</h4>
        <PostList beginning={0} end={3} />
      </section>
      <section className={sectionStyle}>
        <h4 className={titleStyle}>Recent Comments</h4>
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
