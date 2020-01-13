import React, { memo } from 'react'

export default memo(function YouTube ({ src }) {
  return (
    <iframe title={src} width="560" height="315" src={src} frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
  )
})
