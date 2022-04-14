interface Comment {
  _id: String;
  author: String;
  content: String;
  timestamp: Date;
  parent: String;
}

export default Comment;
