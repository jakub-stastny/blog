import React, { memo } from 'react'
import { assert } from '../utils'
import styles from './Highlight.module.css'

const Highlight = ({ style, children }) => (
  <div className={assert(styles.highlight)} style={style}>{children}</div>
)

const HighlightWithTitle = ({ title, style, children }) => (
  <div className={assert(styles.highlight)} style={style}>
    <h3 style={{marginTop: 10, marginBottom: 0}}>{title}</h3>
    {children}
  </div>
)

export default memo(({ title, style = {}, children }) => (
  title ? <HighlightWithTitle {...{title, style, children}} /> : <Highlight {...{style, children}} />
))
