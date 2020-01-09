import React, { memo } from 'react'
import { highlight as highlightClassName } from './Highlight.module.css'
import { assert } from '../utils'

assert(highlightClassName, 'highlightClassName is expected to be defined')

export default memo(({ style = {}, children }) => (
  <div className={highlightClassName} style={style}>{children}</div>
))
