import React, { memo } from 'react'
import { assert } from '../utils'
import { UnhighlightedLink } from '../Link/Link'
import styles from '../Header/Header.module.css'

export default memo(function Header () {
  return (
    <header className={assert(styles.header)}>
      <h1>
        <UnhighlightedLink to="/">Jakub Šťastný</UnhighlightedLink>
      </h1>

      <p>
        On programming, Ruby, React.js, languages and&nbsp;life.
      </p>
    </header>
  )
})
