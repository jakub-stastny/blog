import React, { memo } from 'react'
import { A } from 'hookrouter'
import { selected as selectedClassName } from './Link.module.css'
import { assert } from '../utils'

assert(selectedClassName, 'selectedClassName is expected to be defined')

export default memo(({ to, children }) => (
  // <NavLink to={to} activeClassName={selectedClassName}>{children}</NavLink>
  <A href={to}>{children}</A>
))
