import React from 'react'
import Gravatar from '../Gravatar/Gravatar'
import { assert } from '../utils'
import styles from '../Header/Header.module.css'
import Link from '../Link/Link'

export default () => (
  <header className={styles.header}>
    {/*
    <div className={styles.gravatarSection}>
      <Link to="/">
        <Gravatar />
      </Link>
    </div>
    */}

    <div className={assert(styles.textSection)}>
      <h1>
        <Link to="/">James C Russell</Link>
      </h1>

      <p>
        On programming, Ruby, React.js, languages and&nbsp;life.
      </p>
    </div>
  </header>
)
