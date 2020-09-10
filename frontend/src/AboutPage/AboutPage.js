import React, { useContext, useEffect, memo } from 'react'
import { A, useTitle } from 'hookrouter'
import StateContext from '../StateContext'
import LangContext from '../LangContext'
import { PossiblyLinkedHashTag } from '../HashTag/HashTag'
import * as routes from '../routes'

import ContentEN from './content.en.js'
import ContentES from './content.es.js'

const translations = {
  title: ["About Jakub", "Acerca de Jakub"],
  lastStatusUpdate: ["latest status update", "la última actualización"],
  spinner: ["my life story", "la historia de mi vida"],
  myStorySlug: ['my-story', 'historia-de-mi-vida']
}

export default memo(function AboutPage ({ lang }) {
  const langSettings = useContext(LangContext)
  const { t, setLangFn } = langSettings
  const state = useContext(StateContext)

  useEffect(() => {
    if (lang !== langSettings.lang) {
      setLangFn(lang)
      state.helpers.reset(lang)
    }
  })

  const { nowPagePath, getPostPagePath } = routes[lang]

  useTitle(t(translations.title))

  useEffect(() => { state.lastStatusUpdate || state.helpers.getLatestStatusUpdate() })

  const LastStatusUpdateLink = ({ post }) => (
    post ? <A href={getPostPagePath(post.slug)}>{post.title}</A> : <A href={nowPagePath}>{t(translations.lastStatusUpdate)}</A>
  )

  const Content = (lang === 'en') ? ContentEN : ContentES

  const HashTags = ({ hashtags }) => (
    hashtags.map(hashtag => (
      <span key={hashtag}>
        <PossiblyLinkedHashTag lang={lang} hashtag={hashtag} />{' '}
      </span>
    ))
  )

  return (
    <Content
      lastStatusUpdateLink={<LastStatusUpdateLink post={state.lastStatusUpdate} />}
      myStoryPath={getPostPagePath(t(translations.myStorySlug))}
      HashTags={HashTags}
   />
  )
})
