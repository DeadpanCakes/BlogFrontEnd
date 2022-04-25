import { useState } from "react";

import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const CommentSection = ({ postid }) => {
  const containerStyle = "text-left";
  const commentTitleStyle = "border-darkBG border-y-2 text-2xl";
  const [replyingTo, setReply] = useState(null);

  return (
    <section className={containerStyle}>
      <h4 className={commentTitleStyle}>Comments</h4>
      <CommentForm
        postid={postid}
        replyingTo={replyingTo}
        setReply={setReply}
      />
      <CommentList setReply={setReply} />
      <button onClick={() => console.log(replyingTo)}>test</button>
    </section>
  );
};

export default CommentSection;
