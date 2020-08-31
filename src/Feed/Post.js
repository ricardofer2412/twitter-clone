import React, { useState, useEffect } from 'react'
import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import './post.css'




function Post() {




  return (
    <div className='post'>
      <div className='post__avatar'>
        <Avatar src="https://scontent.fmia1-1.fna.fbcdn.net/v/t1.0-9/37774916_10155371735512015_3382276897239990272_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=QBGhXrk-DxsAX93JtKh&_nc_ht=scontent.fmia1-1.fna&oh=3cad4f17a0a329ef854f84559180ce9d&oe=5F70E051" />
      </div>
      <div className='post__body'>
        <div className='post__header'>
          <div className='post__headerText'>
            <h3>
              Richard Casanova <span className="post__headerSpecial">
                <VerifiedUserIcon className='post__badge' />@richardcasanova
              </span>
            </h3>
          </div>
          <div className='post__headerDescription'>
            <p>This is my first tweet on my Twitter Clone Web App</p>
            <img src="https://media.giphy.com/media/Dh9jqNm8YcGVG/giphy.gif" alt='' />
            <div className='post__footer'>
              <ChatBubbleOutlineIcon fontSize='small' />
              <RepeatIcon fontSize='small' />
              <FavoriteBorderIcon fontSize='small' />
              <PublishIcon fontSize='small' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
