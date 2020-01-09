import React, { useContext } from 'react'
import StateContext from '../state'
import PostPage from '../PostPage/PostPage'

/*
  Render latest post tagged with 'now'.
  Inspired by nownownow.com.
*/

export default function NowPage () {
  const state = useContext(StateContext)
  const lastStatusUpdate = state.posts.find(post => post.tags.map(tag => tag.name).includes('now'))

  // TODO: use suspense
  return (
    <PostPage slug={lastStatusUpdate.slug} />
  )
}
