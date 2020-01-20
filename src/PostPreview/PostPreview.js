import React, { memo } from 'react'
import { A } from 'hookrouter'
import PostStatusLine from '../PostStatusLine/PostStatusLine'
import { getPostPagePath } from '../routes'
import styles from './PostPreview.module.css'
import { assert } from '../utils'
import { UK, MX } from '../flags'

export default memo(({ slug, title, date, tags, lang, excerpt }) => (
  <article>
    <h1 className={assert(styles.title)}>
      <A href={getPostPagePath(slug)}>{title} {lang === 'es' ? <MX /> : <UK />}</A>
    </h1>
    <PostStatusLine date={date} tags={tags} />
    <p dangerouslySetInnerHTML={{__html: excerpt}} />
  </article>
))
