import React from 'react'
import "./widgets.css"
import SearchIcon from '@material-ui/icons/Search';
import {
  TwitterTimelineEmbed, TwitterTweetEmbed, TwitterShareButton
} from 'react-twitter-embed'

function Widgets() {
  return (
    <div className="widgets">
      <div className='widgets__input'>
        <SearchIcon className="widget_searchIcon" />
        <input placeholder='Seach Twitter' type='text' />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"858551177860055040"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName='rickycasanovac'
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: '#reacths is awesome', via: "rickycasanovac" }}
        />
      </div>
    </div>
  )
}

export default Widgets
