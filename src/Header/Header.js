import React, { memo } from 'react'
import { assert } from '../utils'
import styles from '../Header/Header.module.css'
import { UnhighlightedLink } from '../Link/Link'

export default memo(() => (
  <header className={styles.header}>
    <div className={assert(styles.textSection)}>
      <h1>
        <UnhighlightedLink to="/">Jakub Šťastný</UnhighlightedLink>
      </h1>

      <p>
        On programming, Ruby, React.js, languages and&nbsp;life.
      </p>
    </div>
  </header>
))
