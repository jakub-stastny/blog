import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Link.module.css'

export default function Link ({ to, children }) {
  return <NavLink to={to} activeClassName={styles.selected}>{children}</NavLink>
}
