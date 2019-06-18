import React, { Fragment } from 'react'
import { assert } from '../utils'

// TODO: Use h1, but put it into some <article or what is being used for this and tweak the styles so it isn't that big.
// ["title", "tags", "digest", "date", "slug", "excerpt", "path", "links"]
// {title: "zen", slug: "zen", path: "/tags/zen"}
export default function PostPreview ({ path, slug, title, excerpt }) {
  assert(path, 'Path is required')
  assert(title, 'Title is required')
  assert(excerpt, 'Excerpt is required')

  const frontendPath = `/posts/${slug}`

  return <Fragment>
    <h2><a href={frontendPath}>{title}</a></h2>
    <p>{excerpt}</p>
  </Fragment>
}
