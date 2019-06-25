import React from 'react'
import { TwitterTimelineEmbed, TwitterTweetEmbed, TwitterShareButton } from 'react-twitter-embed'

// https://twitter.com/botanicus/timelines/1143628612630958080
export default () => (
  <TwitterTimelineEmbed
    sourceType="collection"
    screenName="botanicus"
    id="1143628612630958080"
    noScrollbar={true}
    noHeader={true}
    noFooter={true}
    transparent={true}
    options={{tweetLimit: 2}}
  />
)
    // <TwitterTweetEmbed tweetId={'933354946111705097'} />

    // <TwitterShareButton
    //   url={'https://facebook.com/saurabhnemade'}
    //   options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
    // />
