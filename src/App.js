import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="posts" element={<h1>This is a list of posts</h1>} />
        <Route path="/posts/:postid" element={<h1>This is a post</h1>} />
        <Route path="/users" element={<h1>This is a lit of users</h1>} />
        <Route path="/users/:userid/" element={<h1>This is a user</h1>} />
      </Routes>
    </div>
  );
}

export default App;
