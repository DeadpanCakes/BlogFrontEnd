import { useState } from "react";
import { Link } from "react-router-dom";

import useComments from "../../hooks/useComments";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import AuthContext from "../context/AuthContext";

const CommentSection = ({ postid }) => {
  //Style
  const containerStyle = "text-left";
  const commentTitleStyle = "border-darkBG border-y-2 text-2xl";
  const linkStyle = "text-teal-400";

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
              <p>
                <Link to="/login" className={linkStyle}>
                  Sign in{" "}
                </Link>
                to comment
              </p>
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
