import parseHtml from "html-react-parser";

const ReplyIndicator = ({ replyingTo, setReply }) => {
  return (
    <div>
      <p>
        Replying to Comment {replyingTo.id} by {replyingTo.author.username}:
      </p>
      <div
        dangerouslySetInnerHTML={{ __html: parseHtml(replyingTo.content) }}
      ></div>

      <button
        onClick={(e) => {
          e.preventDefault();
          setReply(null);
        }}
      >
        X
      </button>
    </div>
  );
};

export default ReplyIndicator;
