import Sidebar from "../sidebar/Sidebar";

const Home = () => {
  const containerStyle = "flex p-20";
    const mainStyle = "flex-1 p-10";
    const sidebarStyle="flex-initial p-20";

  return (
    <div className={containerStyle}>
      <main className={mainStyle}>
        <h2>Home</h2>
      </main>
      <Sidebar sidebarStyle={sidebarStyle} />
    </div>
  );
};

export default Home;
