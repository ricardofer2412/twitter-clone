import React, { useState, useEffect } from 'react'
import './feed.css'
import Tweetbox from './Tweetbox'
import Post from './Post'
import db from 'firebase'

function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  }, []);
  return (
    <div className='feed'>
      <div className="feed__header">
        <h2>HOME</h2>

      </div>
      <Tweetbox />
      {posts.map(posts => ())}
      <Post
        displayName=' Richard Casanova'
        username='richardcasanova'
        virified={true}
        text='This is my first tweet on my Twitter Clone Web App'
        avatar='https://scontent.fmia1-1.fna.fbcdn.net/v/t1.0-9/37774916_10155371735512015_3382276897239990272_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=QBGhXrk-DxsAX93JtKh&_nc_ht=scontent.fmia1-1.fna&oh=3cad4f17a0a329ef854f84559180ce9d&oe=5F70E051'
        image='https://media.giphy.com/media/Dh9jqNm8YcGVG/giphy.gif'
      />
      <Post />
      <Post />
      <Post />

    </div>
  )
}

export default Feed
