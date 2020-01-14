import React, { memo, useContext } from 'react'
import { assert } from '../utils'
import { UnhighlightedLink } from '../Link/Link'
import LangContext from '../LangContext'
import styles from './Header.module.css'
import { UK, MX } from '../flags'

const translations = {
  tagline: [
    <>On programming, Ruby, React.js, languages and&nbsp;life.</>,
    "Acerca de programación, Ruby, React.js, idiomas y la vida."
  ]
}

const langs = {en: UK, es: MX}

export default memo(function Header () {
  const { t, lang, setLang } = useContext(LangContext)

  const switchLang = (lang === 'en') ? 'es' : 'en'

  return (
    <header className={assert(styles.header)}>
      <h1>
        <UnhighlightedLink to="/">Jakub Šťastný</UnhighlightedLink>
      </h1>

      <p>
        {t(translations.tagline)}
      </p>

      <div style={{position: 'absolute', top: 0, right: 0, padding: 5}}>
        <div className={assert(styles.lang)}>
          {/* This will need to happen for posts and tags. */}
          {/* <NavLink to={page[switchLang].route} activeClassName={styles.switchLangLink}> */}
          <span onClick={e => setLang(switchLang)}>
            {langs[switchLang]}
          </span>
        </div>
      </div>
    </header>
  )
})
