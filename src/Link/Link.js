import React, { useContext, memo } from 'react'
import StateContext from '../state'
import { A } from 'hookrouter'

import { assert } from '../utils'
import { selected as selectedClassName, unhighlighted as unhighlightedClassName } from './Link.module.css'

assert(selectedClassName, 'selectedClassName is supposed to be defined')
assert(unhighlightedClassName, 'unhighlightedClassName is supposed to be defined')

export const UnhighlightedLink = memo(({ to, children }) => (
  <A className={unhighlightedClassName} href={to}>{children}</A>
))

export default memo(({ to, children }) => {
  const state = useContext(StateContext) || {} // The deafult is for the test to work.

  if (state.currentPath === to) {
    return <A className={selectedClassName} href={to}>{children}</A>
  } else {
    return <A href={to}>{children}</A>
  }
})
