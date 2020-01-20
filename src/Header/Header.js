import React, { memo, useContext } from 'react'
import { assert } from '../utils'
import { UnhighlightedLink } from '../Link/Link'
import LangContext from '../LangContext'
import StateContext from '../StateContext'
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
  const state = useContext(StateContext)

  const toLang = (lang === 'en') ? 'es' : 'en'
  const FlagIcon = langs[toLang]

  function switchLang () {
    setLang(toLang)
    state.helpers.reset(toLang)
  }

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
          {/* <NavLink to={page[toLang].route} activeClassName={styles.toLangLink}> */}
          <span onClick={switchLang}>
            <FlagIcon />
          </span>
        </div>
      </div>
    </header>
  )
})
