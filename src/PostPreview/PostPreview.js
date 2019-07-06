import React, { memo, Fragment } from 'react'
import PostStatusLine from '../PostStatusLine/PostStatusLine'
import { getPostPagePath } from '../routes'
import styles from './PostPreview.module.css'

const lang = '🇬🇧'

export default memo(({ slug, title, date, tags, excerpt }) => (
  <Fragment>
    <h2 className={styles.title}><a href={getPostPagePath(slug)}>{title} {lang}</a></h2>
    <PostStatusLine date={date} tags={tags} />
    <p>{excerpt}</p>
  </Fragment>
))
