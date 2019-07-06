import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { selected as selectedClassName } from './Link.module.css'
import { assert } from '../utils'

assert(selectedClassName, 'selectedClassName is expected to be defined')

export default memo(({ to, children }) => (
  <NavLink to={to} activeClassName={selectedClassName}>{children}</NavLink>
))
