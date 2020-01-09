import React, { useContext, memo } from 'react'
import { A, useTitle } from 'hookrouter'
import Highlight from '../Highlight/Highlight'
import StateContext from '../state'
import { nowPagePath } from '../routes'
import Email from '../Email/Email'

import styles from './AboutPage.module.css'

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

      <Highlight>
        <h2>What am I up to now?</h2>
        <p>
          If you are curious about what I'm working on now, I regularly write a status update. Here's the last one:{' '}
          <A href={nowPagePath}>{lastStatusUpdate ? lastStatusUpdate.title : 'latest status update'}</A>.
        </p>
      </Highlight>
    </>
  )
})
