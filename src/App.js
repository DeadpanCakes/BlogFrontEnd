import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import AllPosts from "./components/posts/AllPosts";
import Post from "./components/posts/Post";
import UserList from "./components/users/UserList";
import User from "./components/users/User";
import CommentList from "./components/comment/CommentList";
import LoginPage from "./components/authentication/LoginPage";
import SignUpPage from "./components/authentication/SignUpPage";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="min-h-[85vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<AllPosts />} />
          <Route path="/posts/:postid" element={<Post />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:userid/" element={<User />} />
          <Route path="/posts/:postid/comments" element={<CommentList />} />
          <Route path="/posts/:postid/comments/:commentid" element={<Post />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
