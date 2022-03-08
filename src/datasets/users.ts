const sampleUsers = [
  {
    _id: 48317409,
    username: "Dead",
    password: "123",
    firstName: "Anthony",
    lastName: "Mendoza",
    isAdmin: true,
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    get url() {
      return `/users/${this._id}`;
    },
  },
  {
    _id: 4871438974,
    username: "Fred",
    password: "123",
    firstName: "Fred",
    lastName: "Burger",
    isAdmin: false,
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    get url() {
      return `/users/${this._id}`;
    },
  },
  {
    _id: 4874116515,
    userName: "Otter",
    password: "123",
    firstName: "Claire",
    lastName: "TheOtter",
    isAdmin: false,
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    get url() {
      return `/users/${this._id}`;
    },
  },
];

export default sampleUsers;
