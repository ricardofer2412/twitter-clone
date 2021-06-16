import React, { useState, useEffect } from "react";
import Tweetbox from "./Tweetbox";
import Post from "./Post";
import "./feed.css";
import db from "../Firebase/Firebase";


function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className='feed'>
      <div className="feed__header">
        <h2>HOME</h2>

      </div>
      <Tweetbox />

      {posts.map(posts => (
         <Post />
      )  )}
     
      <Post />
      <Post />
      <Post />

    </div>
  )
}

export default Feed
