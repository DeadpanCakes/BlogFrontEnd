import { Link, useParams } from "react-router-dom";

import CommentList from "../comment/CommentList";
import Content from "./Content";
import Sidebar from "../sidebar/Sidebar";
import samplePosts from "../../datasets/posts";

const Post = () => {
  const { postid } = useParams();
  const post = samplePosts.find((post) => {
    return post._id.toString() === postid;
  });

  const containerStyle = "grid grid-cols-3 items-center";
  const mainStyle = "col-span-2 p-10 pl-44 self-end"
  return (
    <div className={containerStyle}>
      <main className={mainStyle}>
        <article>
          <h2>{post.title}</h2>
          <section>
            <p>
              By <Link to={post.author.url}>{post.author.fullName}</Link>
            </p>
            <span>
              <p>In: </p>
              <ul>
                {post.tags.map((tag) => (
                  <li>{tag}</li>
                ))}
              </ul>
            </span>
          </section>
          <Content content={post.content} />
        </article>
        <section>
          <h4>Comments</h4>
          <CommentList />
        </section>
      </main>
      <Sidebar />
    </div>
  );
};

export default Post;
