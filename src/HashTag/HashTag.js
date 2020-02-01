import React, { memo, useContext } from 'react'
import LangContext from '../LangContext'
import { findTagEntryForTagName } from '../TagsPage/entries'
import { A } from 'hookrouter'
import * as routes from '../routes'
import styles from './HashTag.module.css'
import { assert } from '../utils'

function HashTag ({ link = false, slug, children }) {
  const { lang } = useContext(LangContext)
  const { getTagPagePath } = routes[lang]

  return (
    <span className={assert(styles.hashtag)}>
      {link ? <A href={getTagPagePath(slug || children.toLocaleLowerCase())}>{children}</A> : children}
    </span>
  )
}

export const PossiblyLinkedHashTag = memo(({ lang, hashtag }) => (
  <HashTag link={!!findTagEntryForTagName(lang, hashtag)}>
    {hashtag}
  </HashTag>
))

export default HashTag
