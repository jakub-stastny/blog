import React, { Fragment } from 'react'

// NOTE: This fn doesn't have .name.
// TODO: Use h1, but put it into some <article or what is being used for this and tweak the styles so it isn't that big.
// ["title", "tags", "digest", "date", "slug", "excerpt", "path", "links"]
// {title: "zen", slug: "zen", path: "/tags/zen"}
export default ({ path, slug, title, excerpt }) => (
  <Fragment>
    <h2><a href={`/posts/${slug}`}>{title}</a></h2>
    <p>{excerpt}</p>
  </Fragment>
)
