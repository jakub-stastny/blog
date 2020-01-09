import { useState, useEffect, memo } from 'react'
import { detected as detect } from 'adblockdetect'

export default memo(function AdBlockDetect ({ children, value = true }) {
  const [ detected, setDetected ] = useState(false)

  useEffect(() => { setDetected(detect()) }, [])

  return value === detected ? children : null
})
