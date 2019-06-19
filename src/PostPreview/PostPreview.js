import React, { Fragment } from 'react'
import TagList from '../TagList/TagList'
import styles from '../PostPage/PostPage.module.css'
import PublishedDate from '../PublishedDate/PublishedDate'

// NOTE: This fn doesn't have .name.
// TODO: Use h1, but put it into some <article or what is being used for this and tweak the styles so it isn't that big.
// ["title", "tags", "digest", "date", "slug", "excerpt", "path", "links"]
// {title: "zen", slug: "zen", path: "/tags/zen"}
export default ({ slug, title, date, tags, excerpt }) => (
  <Fragment>
    <h2><a href={`/posts/${slug}`}>{title}</a></h2>
    <PublishedDate date={date} />
    <TagList tags={tags} />
    <p>{excerpt}</p>
  </Fragment>
)
