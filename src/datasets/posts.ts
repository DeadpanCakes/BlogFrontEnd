import users from "./users";

const samplePosts = [
  {
    _id: 4879119778,
    title: "My Thoughts On Elden Ring",
    content:
      "They are myriad: Qui perspiciatis sunt nam veritatis suscipit iure. Hic deleniti incidunt. Corporis voluptatibus aut quia non ipsum et explicabo minima. Vero qui accusantium fuga architecto quidem laborum. Qui reiciendis voluptas. Eaque autem occaecati atque omnis qui dolor non sunt aspernatur. Laboriosam et reprehenderit aut. Nulla sequi alias. Sapiente quo dolor cum. Harum et ipsum culpa. Quia aut qui. Dolorum voluptatem quo. Vero et sint voluptatem rerum doloribus facere soluta vel et. Dolores ut eveniet.",
    author: users[0],
    tags: ["Souls", "Elden Ring"],
    isPublished: true,
    timestamp: new Date(),
    lastUpdate: new Date(),
    get url() {
      return `/posts/${this._id}`
    }
  },
  {
    _id: 487014701,
    title: "Why Depression Sucks",
    content:
      "It makes you feel real badv. Blanditiis vel qui est dolorem cum assumenda eius. Voluptatem eius natus. Et cumque rem itaque id similique. Voluptas aut consequatur animi fuga ut minus reprehenderit alias. Deleniti expedita totam non aspernatur sed ea earum. Saepe voluptas inventore dolore facilis id. Ducimus eaque recusandae ullam perspiciatis. Libero culpa quod perferendis quo sequi vitae omnis aspernatur fugiat. In alias quia. Nihil omnis fugit accusantium magnam. Consequatur ut ut omnis aliquam laboriosam. Vel ut facilis dolor qui dolore ut repellat.",
    author: users[1],
    tags: ["Mental Health", "Depression"],
    isPublished: false,
    timestamp: new Date(),
    lastUpdate: new Date(),
    get url() {
      return `/posts/${this._id}`
    }
  },
];

export default samplePosts
