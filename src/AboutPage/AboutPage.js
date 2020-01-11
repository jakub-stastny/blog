import React, { useContext, useEffect, memo } from 'react'
import { A, useTitle } from 'hookrouter'
import Highlight from '../Highlight/Highlight'
import StateContext from '../state'
import LangContext from '../LangContext'
import { nowPagePath, getPostPagePath } from '../routes'
import Email from '../Email/Email'

import { assert } from '../utils'
import styles from './AboutPage.module.css'

const LastStatusUpdateLink = ({ post }) => (
  post ? <A href={getPostPagePath(post.slug)}>{post.title}</A> : <A href={nowPagePath}>latest status update</A>
)

export default memo(function AboutPage () {
  const lang = useContext(LangContext).lang
  useTitle(lang === 'en' ? "About Jakub's blog" : "Acerca del blog de Jakub")

  const state = useContext(StateContext)

  useEffect(() => { state.lastStatusUpdate || state.helpers.getLatestStatusUpdate() })

  if (lang === 'en') {
    return (
      <>
        <h1 className={assert(styles.mainTitle)}>Hi! My name is Jakub.</h1>
        <p>
          If you want to get in touch, please don't hesitate to drop me an email to <Email />.
        </p>

        <Highlight title="What I'm up to now?">
          <p>
            If you are curious about what I'm working on now, I regularly write a status update.
            Here's the last one:{' '}
            <LastStatusUpdateLink post={state.lastStatusUpdate} />.
          </p>
        </Highlight>
      </>
    )
  } else {
    return (
      <>
        <h1 className={assert(styles.mainTitle)}>¡Hola! Me llamo Jakub.</h1>
        <p>
          Si quieres contactarme, no dudes escribirme a <Email />.
        </p>

        <Highlight title="¿Qué hago estos días?">
          <p>
            Si te interesa a que me dedico estos días, regularmente escribo una actualización.
            Aquí es el último:{' '}
            <LastStatusUpdateLink post={state.lastStatusUpdate} />.
          </p>
        </Highlight>
      </>
    )
  }
})
