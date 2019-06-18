import React, { Fragment } from 'react'

const Tag = ({ title, path }) => (
  <Fragment>
    <a href={path}>{title}</a>
  </Fragment>
)

export default ({ tags = [] }) => (
  tags
    .map((tag) => <Tag key={tag.slug} title={tag.title} path={tag.path} />)
    .reduce((prev, curr) => [prev, ' ', curr], [])
)
