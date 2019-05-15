import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Link.module.css'
import { assert } from '../utils'

export default function Link ({ to, children }) {
  assert(to, 'To is required')
  assert(children, 'Children are required')
  return <NavLink to={to} activeClassName={styles.selected}>{children}</NavLink>
}
