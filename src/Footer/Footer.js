import React, { memo } from 'react'
import Link from '../Link/Link'
import { aboutPagePath, subscribePagePath, postsPagePath } from '../routes'
import { main as mainFooterClassName } from './Footer.module.css'
import { assert } from '../utils'

assert(mainFooterClassName, 'mainFooterClassName is expected to be defined')

export default memo(() => (
  <footer className={mainFooterClassName}>
    <nav>
      <ul>
        <li><Link to={postsPagePath}>Posts</Link></li>
        <li><Link to={aboutPagePath}>About me</Link></li>
        <li><Link to={subscribePagePath}>Subscribe</Link></li>
      </ul>
    </nav>
  </footer>
))
