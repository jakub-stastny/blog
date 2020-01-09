import React, { memo } from 'react'
import { A, useTitle } from 'hookrouter'
import NewsletterSignUpForm from '../NewsletterSignUpForm/NewsletterSignUpForm'
import Email from '../Email/Email'

export default memo(function SubscribePage () {
  useTitle("Subscribe to Jakub's newsletter")

  return (
    <>
      <h1>Ways to stay in touch</h1>

      <h2>Quarterly newsletter</h2>
      <p>
        This is a quarterly selection of the best posts. <em>I also occasionally write stuff that I don't post on the blog.</em>
      </p>

      <NewsletterSignUpForm />

      <h2>Notification about every post by email</h2>
      <p>
        At the moment I don't support this option. If you'd like to have it, please <Email subject="Post notifications by email">let me know</Email>.
      </p>

      <h2>RSS feed</h2>
      <p>
        At the moment I don't have RSS feed(s). If you'd like to have it, please <Email subject="RSS on your blog">let me know</Email>.
      </p>

      <h2>Social media</h2>
      <p>
        At the moment I'm not on any social media. I made that decision to <A href="/posts/bye-bye-facebook">protect my sanity</A> and I'm not going to change my mind.
      </p>

      <p>
        I believe in personal contact and longer form posts, which require some attention, and have a message that's worth the time – not mindless blabbering of how many pints one might have downed in Old Ponny's last night.
      </p>
    </>
  )
})
