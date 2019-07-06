/* TODO: import the tooltip code from src/PostPage/PostPage.js */

import React, { memo } from 'react'
// import { hashtag as hashtagClassName } from './HashTag.module.css'
// import { assert } from '../utils'

// assert(hashtagClassName, 'hashtagClassName is expected to be defined')

export default memo(({ title, children }) => (
  <abbr title={title}>{children}</abbr>
))
