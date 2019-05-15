import React from 'react'
import { DiscussionEmbed } from 'disqus-react'
import { disqusShortname } from './config'

export default function Discussion ({title, slug, url}) {
  return <DiscussionEmbed shortname={disqusShortname} config={{url, title, identifier: slug}} />
}
