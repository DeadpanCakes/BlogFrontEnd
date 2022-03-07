import users from "./users";

const virtualMixin = (post: Object) => {
  return Object.assign(
    {},
    {
      ...post,
      get url() {
        return `/api/posts/${this._id}`;
      },
    }
  );
};

const samplePosts = [
  {
    _id: 4879119778,
    title: "My Thoughts On Elden Ring",
    content: "They are myriad",
    author: users[0],
    tags: ["Souls", "Elden Ring"],
    isPublished: true,
    timestamp: new Date(),
    lastUpdate: new Date(),
  },
  {
    _id: 487014701,
    title: "Why Depression Sucks",
    content: "It makes you feel real bad",
    author: users[1],
    tags: ["Mental Health", "Depression"],
    isPublished: false,
    timestamp: new Date(),
    lastUpdate: new Date(),
  },
];

export default samplePosts.map((post) => virtualMixin(post));
