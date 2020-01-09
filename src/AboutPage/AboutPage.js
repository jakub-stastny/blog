import React, { memo } from 'react'
import { useTitle } from 'hookrouter'
import Highlight from '../Highlight/Highlight'
import { nowPagePath } from '../routes'
import Link from '../Link/Link'
import Email from '../Email/Email'

import styles from './AboutPage.module.css'

export default memo(function AboutPage () {
  useTitle("About Jakub's blog")

  return (
    <>
      <h1 className={styles.mainTitle}>Hi! My name is Jakub.</h1>
      <p>
        If you want to get in touch, please don't hesitate to drop me an email to <Email />.
      </p>

      <Highlight>
        <h2>What am I up to now?</h2>
        <p>
          If you are curious about what I'm working on now, I regularly update <Link to={nowPagePath}>my status update</Link>.
        </p>
      </Highlight>
    </>
  )
})
