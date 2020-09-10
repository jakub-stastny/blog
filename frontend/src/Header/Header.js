import React, { memo, useContext, useState } from 'react'
import { A, navigate } from 'hookrouter'
import { assert } from '../utils'
import { UnhighlightedLink } from '../Link/Link'
import LangContext from '../LangContext'
import SettingsContext from '../SettingsContext'
import StateContext from '../StateContext'
import styles from './Header.module.css'
import { UK, MX } from '../flags'
import * as routes from '../routes'
import { tagEntries } from '../TagsPage/entries'
import Modal from 'react-modal'

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'))

const translations = {
  tagline: [
    <>About minimalism, spirituality and&nbsp;life.</>,
    <>Acerca de minimalismo, espiritualidad y&nbsp;la&nbsp;vida.</>
  ],

  // NOTE: These has to be in reverse.
  alert: [
    <>
      Esta entrada todavía no está traducida a Español.<br /> ...
    </>,
    <>
      This post hasn't been translated to English yet.<br /> Press continue to go to the blog home page (in English) or press cancel to stay on this page (in the current setLanguage version).<br />
    </>,
  ]
}

const setLangs = {en: UK, es: MX}

export default memo(function Header () {
  const { t, setLang, setLangFn } = useContext(LangContext)
  const state = useContext(StateContext)
  const settings = useContext(SettingsContext)

  const [ modalIsOpen, setModalIsOpen ] = useState(false)

  const toLang = (setLang === 'en') ? 'es' : 'en'
  const FlagIcon = setLangs[toLang]

  const DevModeIndicator = ({ settings }) => (
    settings.dev && <div className={styles.indicator}><A href={routes[setLang].devPagePath}>DEV</A></div>
  )

  function switchLang () {
    localStorage.setItem('setLang', toLang)

    setLangFn(toLang)

    state.helpers.reset(toLang)

    // Simple routes without :slug.
    Object.entries(routes[setLang]).forEach(([ routeName, routePath ]) => {
      if (window.location.pathname === routePath) {
        return navigate(routes[toLang][routeName])
      }
    })

    const fromSlug = window.location.pathname.split('/').slice(-1)[0]

    // Posts.
    if (routes[setLang].getPostPagePath(fromSlug) === window.location.pathname) {
      const post = state.posts.find(post => post.slug === fromSlug)
      if (post && post.translations[toLang]) {
        navigate(routes[toLang].getPostPagePath(post.translations[toLang]))
      } else {
        setModalIsOpen(true)
      }
    // Tags.
    } else if (routes[setLang].getTagPagePath(fromSlug) === window.location.pathname) {
      const tagEntry = tagEntries.find(tagEntry => tagEntry.slug(setLang) === fromSlug)
      const toSlug = tagEntry && tagEntry.slug(toLang)
      window.location = (toSlug ? routes[toLang].getTagPagePath(toSlug) : routes[toLang].tagsPagePath)
    }
  }

  return (
    <>
      {/* The modal. */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Example Modal"
      >
        <h2>Test</h2>
        {t(translations.alert)}
        {/* TODO: close or link to /. */}
      </Modal>

      {/* The header. */}
      <header className={assert(styles.header)}>
        <h1>
          <UnhighlightedLink to="/">Jakub Šťastný</UnhighlightedLink>
        </h1>

        <p>
          {t(translations.tagline)}
        </p>

        <DevModeIndicator settings={settings} />

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
    </>
  )
})
