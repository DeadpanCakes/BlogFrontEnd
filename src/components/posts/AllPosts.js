import PostList from "./PostList";

const AllPosts = () => {
  const containerStyle = "flex px-40 py-10";
  const titleStyle = "py-10"
  const controlStyle = "max-w-[20vw] min-w-[10vw]";
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
