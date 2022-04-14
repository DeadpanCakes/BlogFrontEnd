
import { useParams } from "react-router-dom";

import useComments from "../../hooks/useComments";
import Comment from "./Comment";
import structureComments from "../../utils/structureComments";

const CommentList = () => {
  const { postid } = useParams();
  const commentData = useComments(postid);
  const comments = structureComments(commentData);

  return comments.length > 0 ? (
    <ul>
      {comments.length > 0 ? (
        comments.map((comment) => {
          return <Comment key={comment._id} comment={comment} />;
        })
      ) : (
        <div>Loading...</div>
      )}
    </ul>
  ) : (
    <p>There are no comments yet</p>
  );
};

export default CommentList;
