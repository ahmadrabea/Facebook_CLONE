import { list } from "postcss";
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import Post from "./Post";

const Posts = ({ newPost }) => {
  const [postsList, setPostsList] = useState([]);
  let list = [];

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      snapshot.docs.map((post) => {
        list.push(post.data());

        setPostsList(list);
      });
    });
  }, [newPost]);

  return (
    <div>
      {postsList.length != 0
        ? postsList.map((post) => (
            <Post
              key={Math.random()}
              name={post.userName}
              message={post.message}
              email={post.userEmail}
              timestamp={post.time}
              image={post.userPhoto}
              postImage={post.postImage}
            />
          ))
        : null}
    </div>
  );
};

export default Posts;
