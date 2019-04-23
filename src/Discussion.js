import React from 'react';
import { DiscussionEmbed } from 'disqus-react';
import config from './config'

export default ({title, slug, url}) =>
  <DiscussionEmbed shortname={config.disqusShortname} config={{url, title, identifier: slug}} />
