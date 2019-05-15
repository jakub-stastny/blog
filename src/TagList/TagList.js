import React, { Fragment } from 'react'

function Tag ({ title, path }) {
  return <Fragment>
    <a href={path}>{title}</a>
  </Fragment>
}

export default function TagList ({ tags = [] }) {
  return tags
    .map((tag) => <Tag key={tag.slug} title={tag.title} path={tag.path} />)
    .reduce((prev, curr) => [prev, ' ', curr], [])
}
