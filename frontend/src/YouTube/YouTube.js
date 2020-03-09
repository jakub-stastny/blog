import React, { memo } from 'react'
import { assert } from '../utils'

export default memo(function YouTube ({ src }) {
  return (
    <iframe src={assert(src).replace(/\bwatch\?v=(.+)$/, 'embed/$1')}
      title={src} width="560" height="315" frameBorder="0" allowFullScreen
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
    </iframe>
  )
})
