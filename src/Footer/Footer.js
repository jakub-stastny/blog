import React, { memo } from 'react'
import { assert } from '../utils'
import Link from '../Link/Link'
import { aboutPagePath, subscribePagePath, postsPagePath } from '../routes'
import styles from './Footer.module.css'

export default memo(function Footer () {
  return (
    <footer className={assert(styles.main)}>
      <nav>
        <ul>
          <li><Link to={assert(postsPagePath)}>Posts</Link></li>
          <li><Link to={assert(aboutPagePath)}>About me</Link></li>
          <li><Link to={assert(subscribePagePath)}>Subscribe</Link></li>
        </ul>
      </nav>
    </footer>
  )
})
