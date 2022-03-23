import users from "./users";
import posts from "./posts";

const comment7 = {
  _id: 7815616548,
  author: users[0],
  timestamp: new Date(),
  content: "nopee",
  commentOf: posts[0],
  children: [],
  get url() {
    return `/posts/${this.commentOf._id}/comments/${this._id}`;
  },
}

const comment5 = {
  _id: 438294782947,
  author: users[1],
  timestamp: new Date(),
  content: "lol",
  commentOf: posts[0],
  children: [],
  get url() {
    return `/posts/${this.commentOf._id}/comments/${this._id}`;
  }
}

const comment2 = {
  _id: 418548184,
  author: users[0],
  timestamp: new Date(),
  content: "Thanks for reading!",
  commentOf: posts[0],
  children: [comment5],
  get url() {
    return `/posts/${this.commentOf._id}/comments/${this._id}`;
  },
};

const comment1 = {
  _id: 854851213,
  author: users[2],
  timestamp: new Date(),
  content: "Wow, so true!",
  commentOf: posts[0],
  children: [comment2, comment7],
  get url() {
    return `/posts/${this.commentOf._id}/comments/${this._id}`;
  },
};

const comment4 = {
  _id: 78141515,
  author: users[2],
  timestamp: new Date(new Date().setDate(new Date().getDate() + 1)),
  content: "sad but true!",
  commentOf: posts[1],
  children: [],
  get url() {
    return `/posts/${this.commentOf._id}/comments/${this._id}`;
  },
};

const comment3 = {
  _id: 781561658,
  author: users[1],
  timestamp: new Date(),
  content: "ikr",
  commentOf: posts[1],
  children: [comment4],
  get url() {
    return `/posts/${this.commentOf._id}/comments/${this._id}`;
  },
};

const comment6 = {
  _id: 78156165481,
  author: users[1],
  timestamp: new Date(),
  content: "haha",
  commentOf: posts[0],
  children: [],
  get url() {
    return `/posts/${this.commentOf._id}/comments/${this._id}`;
  },
}


const sampleComments = [comment1, comment2, comment3, comment4, comment5, comment6, comment7];

export default sampleComments;
