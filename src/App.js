import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import ErrPage from "./components/errPage/ErrorPage";
import CommentForm from "./components/comment/CommentForm";
import DeleteConfirmation from "./components/comment/DeleteConfirmation";

function App() {
  const navigate = useNavigate();

  const [loggedUser, setLoggedUser] = useState(null);
  const loginUser = (jwt) => {
    const user = jwtDecode(jwt);
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
    navigate("/");
  };
  const authData = { loggedUser, loginUser, logoutUser };
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      const exp = new Date(jwtDecode(jwt).exp * 1000);
      const currTime = new Date();
      if (currTime > exp) {
        logoutUser();
      } else {
        setLoggedUser(jwtDecode(jwt));
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={authData}>
      <div className="App">
        <Header loggedUser={loggedUser} />
        <div className="min-h-[85vh]">
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
            <Route
              path="/login"
              element={<LoginPage isLogged={authData.loggedUser} />}
            />
            <Route
              path="/sign-up"
              element={<SignUpPage isLogged={authData.loggedUser} />}
            />
            <Route path="/err" element={<ErrPage />} />
            <Route path="/editor" element={<CommentForm />} />
            <Route
              path="/comments/:commentid/delete"
              element={<DeleteConfirmation />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
