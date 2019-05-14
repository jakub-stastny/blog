import React from 'react'
import { DiscussionEmbed } from 'disqus-react'
import config from './config'

export default function Discussion ({title, slug, url}) {
  return <DiscussionEmbed shortname={config.disqusShortname} config={{url, title, identifier: slug}} />
}
