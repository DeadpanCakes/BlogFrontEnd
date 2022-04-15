import { Link } from "react-router-dom";

import PostList from "../posts/PostList";

const Sidebar = ({ sidebarStyle }) => {
  const containerStyle =
    "border-darkBG border-4 rounded-md flex flex-col min-h-[50vh]";
  const titleStyle = "text-3xl bg-highlight";
  const sectionStyle = "flex-1 flex flex-col text-left";
  return (
    <nav className={sidebarStyle + " " + containerStyle}>
      <Link to="/posts" className={"text-4xl bg-darkBG text-darkFont"}>
        All posts
      </Link>
      <section className={sectionStyle}>
        <h4 className={titleStyle}>Recent Posts</h4>
        <PostList beginning={0} end={3} />
      </section>
    </nav>
  );
};

export default Sidebar;
