import { useState } from "react";

import useComments from "../../hooks/useComments";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import AuthContext from "../context/AuthContext";

const CommentSection = ({ postid }) => {
  //Style
  const containerStyle = "text-left";
  const commentTitleStyle = "border-darkBG border-y-2 text-2xl";

  //Init State
  const commentData = useComments(postid);
  const [replyingTo, setReply] = useState(null);
  const [formContent, setContent] = useState("");
  const [editTarget, setEditing] = useState(null);

  return (
    <AuthContext.Consumer>
      {(auth) => {
        return (
          <section className={containerStyle}>
            <h4 className={commentTitleStyle}>Comments</h4>
            {auth.loggedUser ? (
              <CommentForm
                postid={postid}
                replyingTo={replyingTo}
                setReply={setReply}
                formContent={formContent}
                setContent={setContent}
                editTarget={editTarget}
              />
            ) : (
              <p>Sign in to comment</p>
            )}
            <CommentList
              commentData={commentData}
              setReply={setReply}
              setContent={setContent}
              setEditing={setEditing}
            />
          </section>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default CommentSection;
