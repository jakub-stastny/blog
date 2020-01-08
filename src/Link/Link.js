import React, { useContext, memo } from 'react'
import StateContext from '../state'
import { A } from 'hookrouter'

export default memo(({ current, to, children }) => {
  const state = useContext(StateContext)

  if (state.currentPath === to) {
    return <A style={{color: 'inherit', textDecoration: 'inherit', cursor: 'inherit'}} href={to}>{children}</A>
  } else {
    return <A href={to}>{children}</A>
  }
})
