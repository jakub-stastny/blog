import React from 'react'
import Gravatar from 'react-gravatar'
import { assert } from '../utils'
import styles from '../Header/Header.module.css'
import Link from '../Link/Link'
import { gravatarEmail } from '../config'

export default function Header () {
  return  <header className={styles.main}>
    <Gravatar email={gravatarEmail} size={100} className={assert(styles.gravatar)} alt="&lt;gravatar&gt;" />
    <div className={assert(styles.text)}>
      <h1>
        <Link to="/">James C Russell's blog</Link>
      </h1>
      <p>
        Web development, Ruby, React.js, learning languages and life.
      </p>
    </div>
  </header>
}
