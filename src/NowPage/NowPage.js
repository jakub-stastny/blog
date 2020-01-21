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
  const { t, setLang } = useContext(LangContext)

  setLang(lang)

  const state = useContext(StateContext)
  const lastStatusUpdate = state.lastStatusUpdate

  useEffect(() => { lastStatusUpdate || state.helpers.getLatestStatusUpdate() })

  useTitle(lastStatusUpdate ? lastStatusUpdate.title : t(translations.title))

  return (
    state.lastStatusUpdate ? <PostPage lang={lang} slug={lastStatusUpdate.slug} /> : <Spinner title={t(translations.spinner)} />
  )
}
