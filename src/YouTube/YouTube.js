import React, { memo } from 'react'
import { assert } from '../utils'

export default memo(function YouTube ({ src }) {
  return (
    <iframe title={src} width="560" height="315" src={assert(src).replace(/\bwatch\?v=(.+)$/, 'embed/$1')} frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
    </iframe>
  )
})
