interface Post {
  _id: String;
  content: String;
  tags: [String];
  isPublished: boolean;
  url: String;
}

export default Post;
