import { useParams } from "react-router-dom";

import sampleComments from "../../datasets/comments";
import Comment from "./Comment";

const CommentList = () => {
  const { postid } = useParams();

  const isChild = (targetComment) => {
    return sampleComments.find((comment) => {
      return comment.children.find((comment) => {
        return comment._id === targetComment._id;
      });
    });
  };
  const comments = sampleComments.filter((comment) => {
    return comment.commentOf._id.toString() === postid && !isChild(comment);
  });
  return (
    <ul>
      {comments.map((comment) => {
        return <Comment key={comment._id} comment={comment} />;
      })}
    </ul>
  );
};

export default CommentList;
