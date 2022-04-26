import { useNavigate, useLocation } from "react-router-dom";

import Comment from "./Comment";
import deleteData from "../../utils/deleteData";
import getBearerToken from "../../utils/getBearerToken";

const DeleteConfirmation = () => {
  const commentStyle = "max-w-[50%] ";
  const location = useLocation();
  const navigate = useNavigate();
  const comment = location.state;

  return (
    <div>
      <h2>Delete Confirmation</h2>
      <div>
        <p>Are you sure you want to delete {comment._id}</p>
        <div className={commentStyle}>
          <Comment comment={comment} isPreview={true} />
        </div>
        <div>
          <button
            onClick={() => {
              const postid = comment.commentOf._id;
              deleteData(
                `https://still-depths-86703.herokuapp.com/api/posts/${postid}/comments/${comment._id}`,
                getBearerToken()
              ).then((res) => {
                res.json().then((data) => {
                  navigate(data.post.fetchUrl);
                });
              });
            }}
          >
            Yes
          </button>
          <button>No</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
