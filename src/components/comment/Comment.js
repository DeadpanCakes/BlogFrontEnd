import { Link } from "react-router-dom";
import parseHtml from "html-react-parser";

import AuthContext from "../context/AuthContext";

const Comment = ({ comment, setReply, setContent, setEditing }) => {
  return (
    <AuthContext.Consumer>
      {(auth) => {
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

        const nestedComments = (comment.children || []).map((comment) => {
          return (
            <Comment key={comment._id} comment={comment} setReply={setReply} />
          );
        });
        return (
          <li
            id={comment._id}
            className="pt-5 pl-5 border-l border-darkBG bg-[#C2CAE8]"
          >
            <div>
              <h3>
                <Link to={comment.author.fetchUrl}>
                  {comment.author.username}
                </Link>
              </h3>
              <div
                dangerouslySetInnerHTML={{ __html: parseHtml(comment.content) }}
              ></div>
            </div>
            <div>
              {auth.loggedUser ? (
                auth.loggedUser._id === comment.author._id ? (
                  <button onClick={handleEdit}>Edit</button>
                ) : null
              ) : null}
              <button onClick={handleReply}>Reply</button>
            </div>
            <ul>{nestedComments}</ul>
          </li>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Comment;
