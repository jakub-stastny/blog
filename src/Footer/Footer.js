import React, { memo } from 'react'
import Link from '../Link/Link'
import { aboutPagePath, subscribePagePath, postsPagePath } from '../routes'
import { main as mainFooterClassName } from './Footer.module.css'
import { assert } from '../utils'

import { registerFont, FontAwesomeIcon } from '../FontAwesome/FontAwesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

assert(mainFooterClassName, 'mainFooterClassName is expected to be defined')

registerFont(faTwitter, faGithub)

export default memo(() => (
  <footer className={mainFooterClassName}>
    <nav>
      <ul>
        <li><Link to={postsPagePath}>Posts</Link></li>
        <li><Link to={aboutPagePath}>About me</Link></li>
        <li><Link to={subscribePagePath}>Subscribe</Link></li>

        <li>
          <a href="https://twitter.com/botanicus" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} color="#00aced" />
          </a>
        </li>

        <li>
          <a href="https://github.com/botanicus" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} color="black" />
          </a>
        </li>
      </ul>
    </nav>
  </footer>
))
