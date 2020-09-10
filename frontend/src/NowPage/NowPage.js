import React, { useEffect, useContext } from 'react'
import { useTitle } from 'hookrouter'
import StateContext from '../StateContext'
import LangContext from '../LangContext'
import PostPage from '../PostPage/PostPage'
import Spinner from '../Spinner/Spinner'

/*
  Render latest post tagged with 'now'.
  Inspired by nownownow.com.
*/

const translations = {
  title: ["Fetching the latest update ...", "Descargando la última actualización"],
  spinner: ["latest status update", "la última actualización"]
}

export default function NowPage ({ lang }) {
  const langSettings = useContext(LangContext)
  const { t, setLangFn } = langSettings

  const state = useContext(StateContext)
  const lastStatusUpdate = state.lastStatusUpdate

  useEffect(() => {
    if (lang !== langSettings.lang) {
      setLangFn(lang)
      state.helpers.reset(lang)
    } else {
      lastStatusUpdate || state.helpers.getLatestStatusUpdate()
    }
  })

  useTitle(lastStatusUpdate ? lastStatusUpdate.title : t(translations.title))

  return (
    lastStatusUpdate ? <PostPage lang={lang} slug={lastStatusUpdate.slug} /> : <Spinner title={t(translations.spinner)} />
  )
}
