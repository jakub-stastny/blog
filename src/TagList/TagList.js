import React, { memo } from 'react'
import { A } from 'hookrouter'
import Join from '../Join/Join'
import { getTagPagePath } from '../routes'

/* \u00a0 is the same as &nbsp; */
export default memo(({ tags = [] }) => (
  <Join items={tags}>
    {({ slug, name }) => (
      <A href={getTagPagePath(slug)}>{name.replace(/ /g, "\u00a0")}</A>
    )}
  </Join>
))
