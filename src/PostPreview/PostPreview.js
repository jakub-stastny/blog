import React, { Fragment } from 'react'
import PostStatusLine from '../PostStatusLine/PostStatusLine'
import styles from './PostPreview.module.css'

const lang = '🇬🇧'

export default ({ slug, title, date, tags, excerpt }) => (
  <Fragment>
    <h2 className={styles.title}><a href={`/posts/${slug}`}>{title} {lang}</a></h2>
    <PostStatusLine date={date} tags={tags} />
    <p>{excerpt}</p>
  </Fragment>
)
