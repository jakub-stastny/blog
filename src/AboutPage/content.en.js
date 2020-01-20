import React  from 'react'
import Email from '../Email/Email'
import Highlight from '../Highlight/Highlight'

import { assert } from '../utils'
import styles from './AboutPage.module.css'

export default ({ lastStatusUpdateLink }) => (
  <>
    <h1 className={assert(styles.mainTitle)}>Hi! My name is Jakub.</h1>
    <p>
      If you want to get in touch, please don't hesitate to drop me an email to <Email />.
    </p>

    <Highlight title="What I'm up to now?">
      <p>
        If you are curious about what I'm working on now, I regularly write a status update.
        Here's the last one:{' '}
        {lastStatusUpdateLink}.
      </p>
    </Highlight>
  </>
)
