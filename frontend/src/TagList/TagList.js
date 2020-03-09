import React, { memo } from 'react'
import { A } from 'hookrouter'
import Join from '../Join/Join'
import * as routes from '../routes'

/* \u00a0 is the same as &nbsp; */
export default memo(({ lang, tags = [] }) => (
  <Join items={tags}>
    {({ slug, name }) => (
      <A href={routes[lang].getTagPagePath(slug)}>{name.replace(/ /g, "\u00a0")}</A>
    )}
  </Join>
))
