import React, { Fragment } from 'react'

const Tag = ({ name, path }) => (
  <Fragment>
    <a href={path}>{name}</a>
  </Fragment>
)

export default ({ tags = [] }) => (
  tags
    .map((tag) => <Tag key={tag.slug} name={tag.name} path={tag.path} />)
    .reduce((prev, curr) => [prev, ' ', curr], [])
)
