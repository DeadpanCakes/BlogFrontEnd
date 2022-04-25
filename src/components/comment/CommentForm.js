import { useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";

import postData from "../../utils/postData";
import getBearerToken from "../../utils/getBearerToken";
import ReplyIndicator from "./ReplyIndicator";

const CommentForm = ({
  postid,
  replyingTo,
  setReply,
  formContent,
  setContent,
  editTarget,
}) => {
  const navigate = useNavigate();
  const handleEditorChange = (input) => {
    setContent(input);
  };

  const submitForm = async () => {
    const url = editTarget
      ? `https://still-depths-86703.herokuapp.com/api/posts/${postid}/comments/${editTarget}`
      : `https://still-depths-86703.herokuapp.com/api/posts/${postid}/comments`;
    postData(
      url,
      { content: formContent, parent: replyingTo ? replyingTo.id : null },
      getBearerToken(),
      editTarget ? "PUT" : "POST"
    ).then((res) => {
      res.json().then((data) => {
        navigate(data.fetchUrl + `#${data._id}`);
        window.location.reload();
      });
    });
  };

  return (
    <form id="commentForm" method="POST">
      {replyingTo ? (
        <ReplyIndicator replyingTo={replyingTo} setReply={setReply} />
      ) : null}
      <Editor
        id="commentTextArea"
        value={formContent}
        apiKey="q8ahd89ah5ao7xw1xi5jqo9xbjk8ulfsw1kp5flod644xamm"
        init={{
          toolbar: "undo redo | bold italic | alignleft aligncenter alignright",
          placeholder: "Share Your Thoughts",
        }}
        onEditorChange={handleEditorChange}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          submitForm();
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
