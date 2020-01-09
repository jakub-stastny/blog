import React, { memo } from 'react'
import { A } from 'hookrouter'
import { getTagPagePath } from '../routes'
import styles from './HashTag.module.css'
import { assert } from '../utils'

export default memo(({ link, slug, children }) => (
  <span className={assert(styles.hashtag)}>
    {link ? <A href={getTagPagePath(slug || children.toLocaleLowerCase())}>{children}</A> : children}
  </span>
))
