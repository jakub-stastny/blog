import React, { memo, useContext } from 'react'
import { assert } from '../utils'
import { UnhighlightedLink } from '../Link/Link'
import LangContext from '../LangContext'
import styles from './Header.module.css'

const translations = {
  tagline: [
    "On programming, Ruby, React.js, languages and&nbsp;life.",
    "Acerca de programación, Ruby, React.js, idiomas y la vida."
  ]
}

export default memo(function Header () {
  const { t, lang } = useContext(LangContext)

  return (
    <header className={assert(styles.header)}>
      <h1>
        <UnhighlightedLink to="/">Jakub Šťastný</UnhighlightedLink>
      </h1>

      <p>
        {t(translations.tagline)}
      </p>

      <div style={{position: 'absolute', top: 0, right: 0, padding: 5}}>
        <code>{lang}</code>
      </div>
    </header>
  )
})
