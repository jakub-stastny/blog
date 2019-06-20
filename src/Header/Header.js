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
        Web development, Ruby, React.js, languages and life.
      </p>
    </div>
  </header>
)
