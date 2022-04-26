import { Link } from "react-router-dom";
import parseHtml from "html-react-parser";

import AuthContext from "../context/AuthContext";

const CommentCtrls = ({ comment, setContent, setReply, setEditing }) => {
  const handleEdit = () => {
    setContent(parseHtml(comment.content));
    setEditing(comment._id);
    document.getElementById("commentForm").scrollIntoView();
  };
  const handleReply = () => {
    setReply({
      id: comment._id,
      author: comment.author,
      content: comment.content,
    });
    document.getElementById("commentForm").scrollIntoView();
  };
  return (
    <AuthContext.Consumer>
      {(auth) => {
        return (
          <div>
            {auth.loggedUser ? (
              auth.loggedUser._id === comment.author._id ? (
                <>
                  <button onClick={handleEdit}>Edit</button>
                  <Link to={`/comments/${comment._id}/delete`} state={comment}>
                    <button>Delete</button>
                  </Link>
                  <button onClick={handleReply}>Reply</button>
                </>
              ) : (
                <button onClick={handleReply}>Reply</button>
              )
            ) : null}
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default CommentCtrls;
