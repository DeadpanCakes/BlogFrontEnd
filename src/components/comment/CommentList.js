import Comment from "./Comment";
import structureComments from "../../utils/structureComments";

const CommentList = ({ commentData, setReply, setContent, setEditing }) => {
  const comments = structureComments(commentData);

  return comments.length > 0 ? (
    <ul>
      {comments.length > 0 ? (
        comments.map((comment) => {
          return (
            <Comment
              key={comment._id}
              comment={comment}
              setReply={setReply}
              setContent={setContent}
              setEditing={setEditing}
            />
          );
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
