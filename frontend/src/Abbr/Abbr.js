/* TODO: import the tooltip code from src/PostPage/PostPage.js */

import React, { memo } from 'react'

export default memo(({ title, children }) => (
  <abbr title={title}>{children}</abbr>
))
