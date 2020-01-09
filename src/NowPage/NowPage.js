import React, { useEffect, useContext } from 'react'
import { useTitle } from 'hookrouter'
import StateContext from '../state'
import PostPage from '../PostPage/PostPage'
import Spinner from '../Spinner/Spinner'

/*
  Render latest post tagged with 'now'.
  Inspired by nownownow.com.
*/

export default function NowPage () {
  const state = useContext(StateContext)
  const lastStatusUpdate = state.lastStatusUpdate

  useEffect(() => { lastStatusUpdate || state.helpers.getLatestStatusUpdate() })

  useTitle(lastStatusUpdate ? lastStatusUpdate.title : "Fetching the latest update ...")

  return (
    state.lastStatusUpdate ? <PostPage slug={lastStatusUpdate.slug} /> : <Spinner title="latest status update" />
  )
}
