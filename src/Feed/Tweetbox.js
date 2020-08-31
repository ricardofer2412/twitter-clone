import React from 'react'
import "./tweetbox.css"
import { Avatar, Button } from "@material-ui/core"

function Tweetbox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            src="https://scontent.fmia1-1.fna.fbcdn.net/v/t1.0-9/37774916_10155371735512015_3382276897239990272_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=QBGhXrk-DxsAX93JtKh&_nc_ht=scontent.fmia1-1.fna&oh=3cad4f17a0a329ef854f84559180ce9d&oe=5F70E051" />
          <input placeholder="what's happening? " type='text' />

        </div>
        <input
          className="tweetBox__inputImage" placeholder="Enter image url " type='text' />
        <Button className="tweetBox__button">Tweet</Button>
      </form>
    </div>
  )
}

export default Tweetbox
