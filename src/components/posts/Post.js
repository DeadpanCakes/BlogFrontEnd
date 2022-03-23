import { useParams } from "react-router-dom";

import CommentList from "../comment/CommentList";

const Post = () => {
  const { postid } = useParams();
  console.log(postid);
  return (
    <div>
      <h3>This is post {postid}</h3>
      <div>
        <h4>Comments</h4>
        <CommentList />
      </div>
    </div>
  );
};

export default Post;
