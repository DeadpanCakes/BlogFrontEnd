import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";

import postData from "../../utils/postData";
import getBearerToken from "../../utils/getBearerToken";
import ReplyIndicator from "./ReplyIndicator";

const CommentForm = ({ postid, replyingTo, setReply }) => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const handleEditorChange = (e) => {
    setContent(e.target.getContent());
  };

  const submitForm = async () => {
    postData(
      `https://still-depths-86703.herokuapp.com/api/posts/${postid}/comments`,
      { content, parent: replyingTo.id },
      getBearerToken()
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
        apiKey="q8ahd89ah5ao7xw1xi5jqo9xbjk8ulfsw1kp5flod644xamm"
        init={{
          toolbar:
            "undo redo | bold italic | alignleft aligncenter alignright",
          placeholder: "Share Your Thoughts",
        }}
        onChange={handleEditorChange}
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
