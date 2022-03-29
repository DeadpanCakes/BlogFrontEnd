import PostList from "./PostList";

const AllPosts = () => {
  const containerStyle = "flex pl-60 pr-40 py-10 min-h-[100vh]";
  const titleStyle = "py-10 text-4xl"
  const controlStyle = "flex-1 border-4 border-darkBG max-w-[20vw]";
  const postsStyle = "flex-1";
  return (
    <div>
      <h2 className={titleStyle}>All Posts</h2>
      <section className={containerStyle}>
        <div className={controlStyle}>
          <ul>
            <li>Filter</li>
            <li>Sort</li>
            <li>Search</li>
          </ul>
        </div>
        <div className={postsStyle}>
          <PostList />
        </div>
      </section>
    </div>
  );
};
export default AllPosts;
