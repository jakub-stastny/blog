import React, { memo } from 'react'
import Join from '../Join/Join'
import { getTagPagePath } from '../routes'

/* \u00a0 is the same as &nbsp; */
export default memo(({ tags }) => (
  <Join items={tags}>
    {({ slug, name }) => (
      <a href={getTagPagePath(slug)}>{name.replace(/ /g, "\u00a0")}</a>
    )}
  </Join>
))
