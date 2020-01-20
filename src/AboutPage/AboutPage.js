import React, { useContext, useEffect, memo } from 'react'
import { A, useTitle } from 'hookrouter'
import StateContext from '../StateContext'
import LangContext from '../LangContext'
import { nowPagePath, getPostPagePath } from '../routes'

import ContentEN from './content.en.js'
import ContentES from './content.es.js'

const translations = {
  title: ["About Jakub", "Acerca de Jakub"],
  lastStatusUpdate: ["latest status update", "LATEST STATUS UPDATE"]
}

export default memo(function AboutPage () {
  const { t, lang } = useContext(LangContext)
  const state = useContext(StateContext)

  useTitle(t(translations.title))

  useEffect(() => { state.lastStatusUpdate || state.helpers.getLatestStatusUpdate() })

  const LastStatusUpdateLink = ({ post }) => (
    post ? <A href={getPostPagePath(post.slug)}>{post.title}</A> : <A href={nowPagePath}>{t(translations.lastStatusUpdate)}</A>
  )

  const Content = (lang === 'en') ? ContentEN : ContentES

  return <Content lastStatusUpdateLink={<LastStatusUpdateLink post={state.lastStatusUpdate} />} />
})
