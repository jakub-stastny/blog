import React, { memo } from 'react'
import Link from '../Link/Link'
import styles from './Footer.module.css'

import { registerFont, FontAwesomeIcon } from '../FontAwesome/FontAwesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

registerFont(faTwitter, faGithub)

export default memo(() => (
  <footer className={styles.main}>
    <nav>
      <ul>
        <li><Link to="/">Posts</Link></li>
        <li><Link to="/about">About me</Link></li>
        <li><Link to="/subscribe">Subscribe</Link></li>
        <li><a href="https://twitter.com/botanicus" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} color="#00aced" /></a></li>
        <li><a href="https://github.com/botanicus" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} color="black" /></a></li>
      </ul>
    </nav>
  </footer>
))
