import React, { memo } from 'react'
import { A } from 'hookrouter'
import PostStatusLine from '../PostStatusLine/PostStatusLine'
import { getPostPagePath } from '../routes'
import styles from './PostPreview.module.css'
import { assert } from '../utils'

const lang = '🇬🇧'

export default memo(({ slug, title, date, tags, excerpt }) => (
  <article>
    <h1 className={assert(styles.title)}>
      <A href={getPostPagePath(slug)}>{title} {lang}</A>
    </h1>
    <PostStatusLine date={date} tags={tags} />
    <p dangerouslySetInnerHTML={{__html: excerpt}} />
  </article>
))
