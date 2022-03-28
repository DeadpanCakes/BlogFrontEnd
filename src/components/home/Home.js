import Sidebar from "../sidebar/Sidebar";

const Home = () => {
  const containerStyle = "flex p-20";
  const mainStyle = "flex-1 p-10";
  const sidebarStyle = "flex-initial min-w-[30vw]";
  const titleStyle = "text-5xl p-20";

  return (
    <div className={containerStyle}>
      <main className={mainStyle}>
        <h2 className={titleStyle}>Welcome To The Blog</h2>
        <p>
          Non eos culpa est ut recusandae assumenda delectus at. Voluptatibus
          dolorum magni pariatur architecto similique dicta quam temporibus.
          Adipisci et cupiditate et quia alias ut accusantium debitis
          architecto. Perspiciatis officia porro. Laboriosam aperiam a. Neque
          velit quam. Aspernatur sit consequatur doloribus laudantium. Magni
          culpa provident aut aliquam. Molestiae optio expedita sed dolor
          dolores. Et voluptate autem alias tenetur. Beatae vel et non saepe
          distinctio occaecati aut. Et odit nisi voluptatem facilis animi esse
          architecto cupiditate nesciunt. Consequatur ipsum optio vero aut quia
          quidem. Dolorum est ad placeat nihil cumque ut cum voluptates.
          Dignissimos est cum aut nam omnis culpa aut placeat velit.
        </p>
      </main>
      <Sidebar sidebarStyle={sidebarStyle} />
    </div>
  );
};

export default Home;
