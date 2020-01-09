import React, { useEffect, useContext } from 'react'
import { useTitle } from 'hookrouter'
import StateContext from '../state'
import PostPage from '../PostPage/PostPage'

/*
  Render latest post tagged with 'now'.
  Inspired by nownownow.com.
*/

export default function NowPage () {
  useTitle("Fetching the latest update ...")

  const state = useContext(StateContext)

  useEffect(() => { state.lastStatusUpdate || state.helpers.getLatestStatusUpdate() })

  // TODO: use suspense
  return (
    state.lastStatusUpdate ? <PostPage slug={state.lastStatusUpdate.slug} /> : null
  )
}
