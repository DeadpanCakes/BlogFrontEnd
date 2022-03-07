const virtualMixin = (user: Object) => {
  return Object.assign(
    {},
    {
      ...user,
      get url() {
        return `/api/users/${this._id}`;
      },
      get fullName() {
        return `${this.firstName} ${this.lastName}`;
      },
    }
  );
};

const sampleUsers = [
  {
    _id: 48317409,
    username: "Dead",
    password: "123",
    firstName: "Anthony",
    lastName: "Mendoza",
    isAdmin: true,
  },
  {
    _id: 4871438974,
    username: "Fred",
    password: "123",
    firstName: "Fred",
    lastName: "Burger",
    isAdmin: false,
  },
  {
    _id: 4874116515,
    userName: "Otter",
    password: "123",
    firstName: "Claire",
    lastName: "TheOtter",
    isAdmin: false,
  },
];
 
export default sampleUsers.map((user) => virtualMixin(user));
