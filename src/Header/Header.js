import React, { memo, useContext } from 'react'
import { navigate } from 'hookrouter'
import { assert } from '../utils'
import { UnhighlightedLink } from '../Link/Link'
import LangContext from '../LangContext'
import StateContext from '../StateContext'
import styles from './Header.module.css'
import { UK, MX } from '../flags'
import * as routes from '../routes'

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

    Object.entries(routes[lang]).forEach(([ routeName, routePath ]) => {
      // Simple routes without :slug.
      if (window.location.pathname === routePath) {
        return navigate(routes[toLang][routeName])
      // Posts.
      } else if (routeName === 'getPostPage') {
        const post = state.posts.find(post => post.slug === window.location.pathname.split('/').slice(-1)[0])
        if (post.translations[toLang]) {
          return navigate(routes[toLang][routeName](post.translations[toLang]))
        } else {
          if (window.confirm(t(translations.alert))) {
            navigate('/')
         }
       }
     } else if (routeName === 'getTagPage') {
        // FIXME: tag translations.
        return navigate(routes[toLang].tagsPage)
      }
    })
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
