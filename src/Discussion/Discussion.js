import React, { memo } from 'react'
import { DiscussionEmbed } from 'disqus-react'
import { disqusShortname } from '../config'

export default memo(({ title, slug, url }) => (
  <DiscussionEmbed shortname={disqusShortname} config={{url, title, identifier: slug}} />
))
