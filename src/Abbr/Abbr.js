import React, { memo } from 'react'

/* TODO: Currently this doesn't do anything useful. */
/* The intended purpose of this is to have an <abbr /> alternative
 * that works on mobile. It's supposed to show a JS tooltip. */

export default memo(({ title, children }) => (
  <abbr title={title}>{children}</abbr>
))
