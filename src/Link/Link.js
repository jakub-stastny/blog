import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Link.module.css'

export default memo(({ to, children }) => (
  <NavLink to={to} activeClassName={styles.selected}>{children}</NavLink>
))
