import React, { memo, useContext } from 'react'
import { assert } from '../utils'
import { UnhighlightedLink } from '../Link/Link'
import LangContext from '../LangContext'
import styles from './Header.module.css'

export default memo(function Header () {
  const lang = useContext(LangContext).lang

  return (
    <header className={assert(styles.header)}>
      <h1>
        <UnhighlightedLink to="/">Jakub Šťastný</UnhighlightedLink>
      </h1>

      <p>
        On programming, Ruby, React.js, languages and&nbsp;life.
      </p>

      <div style={{position: 'absolute', top: 0, right: 0, padding: 5}}>
        <code>{lang}</code>
      </div>
    </header>
  )
})
