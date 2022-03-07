import users from "./users";
import posts from "./posts";

const virtualMixin = (comment) => {
  return Object.assign(
    {},
    {
      ...comment,
      get url() {
        return `/api/posts/${this.commentOf._id}/comments/${this._id}`;
      },
    }
  );
};

const comment1= {
  _id: 854851213,
  author: users[2],
  timestamp: new Date(),
  content: "Wow, so true!",
  commentOf: posts[0],
  parent: null
};

const comment2 = {
  _id: 418548184,
  author: users[0],
  timestamp: new Date(),
  content: "Thanks for reading!",
  commentOf: posts[0],
  parent: comment1
};

const comment3 = {
  _id: 781561658,
  author: users[1],
  timestamp: new Date(),
  content: "ikr",
  commentOf: posts[1],
  parent: null
}

const comment4 = {
  _id: 78141515,
  author: users[2],
  timestamp: new Date(),
  content: "sad but true",
  commentOf: posts[1],
  parent: comment3,
}

const sampleComments = [
  comment1,
  comment2,
  comment3,
  comment4
];

sampleComments.map(comment => virtualMixin(comment));

export default sampleComments