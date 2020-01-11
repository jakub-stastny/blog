import React, { memo, useContext } from 'react'
import LangContext from '../LangContext'
import { assert } from '../utils'
import Link from '../Link/Link'
import { aboutPagePath, subscribePagePath, postsPagePath } from '../routes'
import styles from './Footer.module.css'

export default memo(function Footer () {
  const t = useContext(LangContext).t

  return (
    <footer className={assert(styles.main)}>
      <nav>
        <ul>
          <li><Link to={assert(postsPagePath)}>{t('Posts', 'Entradas')}</Link></li>
          <li><Link to={assert(aboutPagePath)}>{t('About me', 'Sobre mi')}</Link></li>
          <li><Link to={assert(subscribePagePath)}>{t('Subscribe', 'Subscribirse')}</Link></li>
        </ul>
      </nav>
    </footer>
  )
})
