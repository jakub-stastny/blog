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
  ],
  alert: [
    "This post hasn't been translated to English yet.<br /> Press continue to go to the blog home page (in English) or press cancel to stay on this page (in the current language version).<br />",
    "Esta entrada todavía no está traducida a Español.<br /> ..."
  ]
}

const langs = {en: UK, es: MX}

export default memo(function Header () {
  const { t, lang, setLang } = useContext(LangContext)
  const state = useContext(StateContext)

  const toLang = (lang === 'en') ? 'es' : 'en'
  const FlagIcon = langs[toLang]

  function switchLang () {
    localStorage.setItem('lang', toLang)
    setLang(toLang)
    state.helpers.reset(toLang)
    const chunks = window.location.pathname.split('/')
    console.log('ch', chunks)
    if (chunks[1] === 'posts' || chunks[1] === 'entradas' && chunks[2]) {
      const replacePost = state.posts.find(post => post.slug === chunks[2])
      console.log('rp', replacePost)
      if (replacePost && replacePost.translations[toLang]) {
        const translatedPostSlug = replacePost.translations[toLang]
        window.location = (toLang === 'en') ? `/posts/${translatedPostSlug}` : `/entradas/${translatedPostSlug}`
      } else {
        if (window.confirm(t(translations.alert))) {
          window.location = '/'
        }
      }
    }
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
