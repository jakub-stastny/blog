import React, { memo, useContext } from 'react'
import LangContext from '../LangContext'
import { A } from 'hookrouter'
import * as routes from '../routes'
import styles from './HashTag.module.css'
import { assert } from '../utils'

export default memo(function HashTag ({ link = false, slug, children }) {
  const { lang } = useContext(LangContext)
  const { getTagPagePath } = routes[lang]

  return (
    <span className={assert(styles.hashtag)}>
      {link ? <A href={getTagPagePath(slug || children.toLocaleLowerCase())}>{children}</A> : children}
    </span>
  )
})
