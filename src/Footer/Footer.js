import React from 'react'
import Link from '../Link/Link'
import styles from './Footer.module.css'

/* https://fontawesome.com/how-to-use/on-the-web/using-with/react */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter, faGithub)

export default function Footer () {
  return <footer className={styles.main}>
    <nav>
      <ul>
        <li><Link to="/">Posts</Link></li>
        <li><Link to="/about">About me</Link></li>
        <li><a href="https://twitter.com/botanicus" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} color="#00aced" /></a></li>
        <li><a href="https://github.com/botanicus" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} color="black" /></a></li>
      </ul>
    </nav>
  </footer>
}
