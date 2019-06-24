import React, { Fragment } from 'react'
import NewsletterSignUpForm from '../NewsletterSignUpForm/NewsletterSignUpForm'
import Email from '../Email/Email'

import { registerFont, FontAwesomeIcon } from '../FontAwesome/FontAwesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

registerFont(faTwitter)

export default () => (
  <Fragment>
    <h1>Ways to stay in touch</h1>
    <h2>Monthly newsletter</h2>
    <p>
      This is a monthly selection of the best posts.
    </p>

    <NewsletterSignUpForm />

    <h2>Notification about every post by email</h2>
    <p>
      At the moment I don't support this option. If you'd like to have it, please <Email subject="Post notifications by email">let me know</Email>.
    </p>

    <p>
      I post links to new posts on <a href="https://twitter.com/botanicus" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} color="#00aced" /> Twitter</a>.
    </p>

    <h2>RSS feed</h2>
    <p>
      At the moment I don't have RSS feed(s). If you'd like to have it, please <Email subject="RSS on your blog">let me know</Email>.
    </p>
  </Fragment>
)
