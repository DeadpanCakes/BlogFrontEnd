import { Link } from "react-router-dom";
import parseHtml from "html-react-parser";

import CommentCtrls from "./CommentCtrls";
import DeletedComment from "./DeletedComment";

const Comment = ({
  comment,
  setReply,
  setContent,
  setEditing,
  isPreview = false,
}) => {
  const containerStyle = "pt-5 pl-5 border-l border-darkBG bg-[#C2CAE8]";

  const nestedComments = (comment.children || []).map((comment) => {
    return <Comment key={comment._id} comment={comment} setReply={setReply} />;
  });
  return comment.isPlaceholder ? (
    <li className={containerStyle}>
      <DeletedComment className={containerStyle} />
      <ul>{nestedComments}</ul>
    </li>
  ) : (
    <li id={comment._id} className={containerStyle}>
      <div>
        <h3>
          <Link to={comment.author.fetchUrl}>{comment.author.username}</Link>
        </h3>
        <div
          dangerouslySetInnerHTML={{ __html: parseHtml(comment.content) }}
        ></div>
      </div>
      {!isPreview ? (
        <CommentCtrls
          comment={comment}
          setReply={setReply}
          setContent={setContent}
          setEditing={setEditing}
        />
      ) : null}
      <ul>{nestedComments}</ul>
    </li>
  );
};

export default Comment;
