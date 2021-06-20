import React, { useState, useEffect } from "react";
import Post from "../Post/Post";
import "./MiddlePanel.css";
import db from "../firebase";
import PostTextBox from "./PostTextBox";

function MiddlePanel() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="MiddlePanel">
      <div>
        <PostTextBox />
      </div>
      <div>
        {posts.map((post) => (
          <Post
            name={post.name}
            avatar={post.avatar}
            time={post.time}
            audience={post.audience}
            text={post.text}
            content={post.content}
            verified={post.verified}
          />
        ))}
      </div>
    </div>
  );
}

export default MiddlePanel;
