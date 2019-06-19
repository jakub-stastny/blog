import React from 'react'
import Join from '../Join/Join'

export default ({ tags }) => (
  <Join items={tags}>
    {({ slug, name }) => (
      <a href={`/tags/${slug}`}>{name}</a>
    )}
  </Join>
)
