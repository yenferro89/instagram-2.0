import React from "react";
import Post from "./Post";

const posts = [
  {
    id: 123,
    username: "yenferro",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "This is cool!!!",
  },
];
function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
