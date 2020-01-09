import React, { memo } from 'react'
import { highlight as highlightClassName } from './Highlight.module.css'
import { assert } from '../utils'

assert(highlightClassName, 'highlightClassName is expected to be defined')

const Highlight = ({ style, children }) => (
  <div className={highlightClassName} style={style}>{children}</div>
)

const HighlightWithTitle = ({ title, style, children }) => (
  <div className={highlightClassName} style={style}>
    <h3 style={{marginTop: 10, marginBottom: 0}}>{title}</h3>
    {children}
  </div>
)

export default memo(({ title, style = {}, children }) => (
  title ? <HighlightWithTitle {...{title, style, children}} /> : <Highlight {...{style, children}} />
))
