import { Link, useParams } from "react-router-dom";

import CommentList from "../comment/CommentList";
import samplePosts from "../../datasets/posts";

const Post = () => {
  const { postid } = useParams();
  const post = samplePosts.find((post) => {
    return post._id.toString() === postid;
  });

  return (
    <div>
      <section>
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
        <section>
          <p>{post.content}</p>
        </section>
      </section>
      <section>
        <h4>Comments</h4>
        <CommentList />
      </section>
    </div>
  );
};

export default Post;
