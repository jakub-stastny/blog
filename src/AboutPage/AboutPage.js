import React, { useEffect, memo } from 'react'
import Highlight from '../Highlight/Highlight'
import { nowPagePath } from '../routes'
import { Link } from 'react-router-dom'
import Email from '../Email/Email'

import styles from './AboutPage.module.css'

export default memo(() => {
  useEffect(() => {
    document.title = "About Jakub's blog"
  })

  return (
    <>
      <h1 className={styles.mainTitle}>Hi! My name is Jakub.</h1>
      <p>
        If you want to contact me, please don't hesitate to drop me an email to <Email />.
      </p>

      <Highlight>
        <h2>What am I up to now?</h2>
        <p>
          If you are curious about what I'm working on now, I regularly update my <Link to={nowPagePath}>latest status update</Link>.
        </p>
      </Highlight>
    </>
  )
})
