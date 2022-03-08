import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import PostList from "./components/posts/PostList";
import Post from "./components/posts/Post";
import UserList from "./components/users/UserList";
import User from "./components/users/User";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<PostList />} />
        <Route path="/posts/:postid" element={<Post />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:userid/" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
