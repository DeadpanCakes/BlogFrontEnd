import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import CommentList from "../comment/CommentList";
import Content from "./Content";
import Sidebar from "../sidebar/Sidebar";
import usePosts from "../../hooks/usePosts";

const Post = () => {
  const { postid } = useParams();
  const posts = usePosts();
  const [post, setPost] = useState(null);
  useEffect(() => {
    setPost(
      posts.find((post) => {
        return post._id === postid;
      })
    );
  }, [postid, posts]);

  const containerStyle = "grid grid-cols-3 items-center p-10 pr-44 gap-10";
  const mainStyle = "col-span-2 p-10 pl-44 self-end";
  const sidebarStyle = "self-start";
  const commentsStyle = "text-left";
  const commentTitleStyle = "border-darkBG border-y-2 text-2xl";

  return (
    <div className={containerStyle}>
      {post ? (
        <main className={mainStyle}>
          <article>
            <h2>{post.title}</h2>
            <section>
              <p>
                By{" "}
                <Link to={`/users/${post.author._id}`}>
                  {`${post.author.firstName} ${post.author.lastName}`}
                </Link>
              </p>
              <span>
                <p>In: </p>
                <ul>
                  {post.tags.map((tag) => (
                    <li key={"tag" + tag}>{tag}</li>
                  ))}
                </ul>
              </span>
            </section>
            <Content content={post.content} sidebarStyle={sidebarStyle} />
          </article>
          <section className={commentsStyle}>
            <h4 className={commentTitleStyle}>Comments</h4>
            <CommentList />
          </section>
        </main>
      ) : (
        <div>Loading...</div>
      )}
      <Sidebar sidebarStyle={sidebarStyle} />
    </div>
  );
};

export default Post;
