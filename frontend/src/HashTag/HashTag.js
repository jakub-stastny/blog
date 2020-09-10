import React, { memo, useContext } from 'react'
import LangContext from '../LangContext'
import { findTagEntryForTagName } from '../TagsPage/entries'
import { A } from 'hookrouter'
import * as routes from '../routes'
import styles from './HashTag.module.css'
import { assert } from '../utils'

function HashTag ({ link = false, slug, children }) {
  const { setLang } = useContext(LangContext)
  const { getTagPagePath } = routes[setLang]

  return (
    <span className={assert(styles.hashtag)}>
      {link ? <A href={getTagPagePath(slug || children.toLocaleLowerCase())}>{children}</A> : children}
    </span>
  )
}

// TODO: With the tagEntry set the slug.
export const PossiblyLinkedHashTag = memo(({ setLang, hashtag }) => (
  <HashTag link={!!findTagEntryForTagName(setLang, hashtag)}>
    {hashtag}
  </HashTag>
))

export default memo(HashTag)
