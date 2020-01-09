import React, { useContext, memo } from 'react'
import { A, useTitle } from 'hookrouter'
import Highlight from '../Highlight/Highlight'
import StateContext from '../state'
import { nowPagePath, getPostPagePath } from '../routes'
import Email from '../Email/Email'

import styles from './AboutPage.module.css'

const LastStatusUpdateLink = ({ post }) => (
  post ? <A href={getPostPagePath(post.slug)}>{post.title}</A> : <A href={nowPagePath}>latest status update</A>
)

export default memo(function AboutPage () {
  useTitle("About Jakub's blog")

  const state = useContext(StateContext)
  const lastStatusUpdate = state.posts.find(post => post.tags.map(tag => tag.name).includes('now'))

  return (
    <>
      <h1 className={styles.mainTitle}>Hi! My name is Jakub.</h1>
      <p>
        If you want to get in touch, please don't hesitate to drop me an email to <Email />.
      </p>

      <Highlight title="What I'm up to now?">
        <p>
          If you are curious about what I'm working on now, I regularly write a status update. Here's the last one:{' '}
          <LastStatusUpdateLink post={lastStatusUpdate} />.
        </p>
      </Highlight>
    </>
  )
})
