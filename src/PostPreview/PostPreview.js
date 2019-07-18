import React, { memo } from 'react'
import PostStatusLine from '../PostStatusLine/PostStatusLine'
import { getPostPagePath } from '../routes'
import { title as titleClassName } from './PostPreview.module.css'
import { assert, markdownToHTML } from '../utils'

assert(titleClassName, 'titleClassName is expected to be defined')

const lang = '🇬🇧'

export default memo(({ slug, title, date, tags, excerpt }) => (
  <article>
    <h1 className={titleClassName}><a href={getPostPagePath(slug)}>{title} {lang}</a></h1>
    <PostStatusLine date={date} tags={tags} />
    <p>{markdownToHTML(excerpt)}</p>
  </article>
))
