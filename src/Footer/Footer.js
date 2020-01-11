import React, { memo, useContext } from 'react'
import LangContext from '../LangContext'
import { assert } from '../utils'
import Link from '../Link/Link'
import { aboutPagePath, subscribePagePath, postsPagePath } from '../routes'
import styles from './Footer.module.css'

const translations = {
  posts: ['Posts', 'Entradas'],
  about: ['About me', 'Sobre mi'],
  subscribe: ['Subscribe', 'Subscribirse']
}

export default memo(function Footer () {
  const { t } = useContext(LangContext)

  return (
    <footer className={assert(styles.main)}>
      <nav>
        <ul>
          <li><Link to={assert(postsPagePath)}>{t(translations.posts)}</Link></li>
          <li><Link to={assert(aboutPagePath)}>{t(translations.about)}</Link></li>
          <li><Link to={assert(subscribePagePath)}>{t(translations.subscribe)}</Link></li>
        </ul>
      </nav>
    </footer>
  )
})
