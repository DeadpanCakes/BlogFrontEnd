import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";

import AuthContext from "./components/context/AuthContext";
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
  const [loggedUser, setLoggedUser] = useState(localStorage.getItem("jwt"));
  const loginUser = (jwt) => {
    const user = jwtDecode(jwt);
    console.log(user);
    setLoggedUser({
      _id: user._id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
    });
  };
  const logoutUser = () => {
    setLoggedUser(null);
    localStorage.removeItem("jwt");
  };
  const authData = { loggedUser, loginUser, logoutUser };
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      const exp = new Date(jwtDecode(jwt).exp * 1000);
      const currTime = new Date();
      if (currTime > exp) {
        logoutUser();
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={authData}>
      <div className="App">
        <Header />
        <div className="min-h-[85vh]">
          <button
            onClick={() => {
              logoutUser();
            }}
          >
            Log Out
          </button>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<AllPosts />} />
            <Route path="/posts/:postid" element={<Post />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:userid/" element={<User />} />
            <Route path="/posts/:postid/comments" element={<CommentList />} />
            <Route
              path="/posts/:postid/comments/:commentid"
              element={<Post />}
            />
            <Route path="/login" element={<LoginPage isLogged={authData.loggedUser} />} />
            <Route path="/sign-up" element={<SignUpPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
