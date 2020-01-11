import React, { memo, useContext } from 'react'
import { A } from 'hookrouter'
import NewsletterSignUpForm, { NewsletterSignUpLink } from '../NewsletterSignUpForm/NewsletterSignUpForm'
import Email from '../Email/Email'
import ToggleHideContent from '../ToggleHideContent/ToggleHideContent'
import AdBlockDetect from '../AdBlockDetect/AdBlockDetect'
import Highlight from '../Highlight/Highlight'
import { assert } from '../utils'
import styles from './SubscribePage.module.css'

export default () => (
  <>
    <h1>ES Ways to stay in touch</h1>

    <h2>Quarterly newsletter</h2>
    <p>
      This is a quarterly selection of the best posts. <em>I also occasionally write stuff that I don't post on the blog.</em>
    </p>

    <AdBlockDetect>
      <Highlight title="Ad blocker" style={{background: 'mistyrose', marginBottom: 15}}>
        <p>
          Your ad blocker is enabled. This in some cases <em>might prevent submission of this form</em> (
          <a href="https://github.com/gndx/react-mailchimp-form/issues/11" target="_blank" rel="noopener noreferrer">gndx/react-mailchimp-form#11</a>
          ).
        </p>

        <p>
          If this happens to you, please <NewsletterSignUpLink>subscribe directly here</NewsletterSignUpLink>.
        </p>
      </Highlight>
    </AdBlockDetect>

    <div className={assert(styles.form)}>
      <NewsletterSignUpForm />
    </div>

    <div style={{marginTop: 25}}>
      <ToggleHideContent prompt="Looking for more options?">
        <div className={assert(styles.disabled)}>
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
            I believe in personal contact and longer form posts, which require some attention, and have a message that's worth the time – not mindless blabbering about how many pints one might have downed in Old Ponny's last night.
          </p>
        </div>
      </ToggleHideContent>
    </div>
  </>
)
