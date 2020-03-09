import React, { useContext, memo } from 'react'
import StateContext from '../StateContext'
import { A } from 'hookrouter'

import { assert } from '../utils'
import styles from './Link.module.css'

export const UnhighlightedLink = memo(({ to, children }) => (
  <A className={assert(styles.unhighlighted)} href={to}>{children}</A>
))

export default memo(({ to, children }) => {
  const state = useContext(StateContext) || {} // The deafult is for the test to work.

  if (state.currentPath === to) {
    return <A className={assert(styles.selected)} href={to}>{children}</A>
  } else {
    return <A href={to}>{children}</A>
  }
})
