import React from 'react'
import Highlight from '../Highlight/Highlight'
import { nowPagePath } from '../routes'
import { Link } from 'react-router-dom'

import styles from './AboutPage.module.css'

export default () => (
  <>
    <h1 className={styles.mainTitle}>Hi! My name is Jakub.</h1>
    <Highlight>
      <h2>What am I up to now?</h2>
      <p>
        If you are curious about what I'm working on now, don't hesitate to <Link to={nowPagePath}>check my latest status update</Link>, updated monthly.
      </p>
    </Highlight>
  </>
)
