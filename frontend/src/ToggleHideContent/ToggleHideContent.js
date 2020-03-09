import React, { memo, useState } from 'react'

export default memo(function ToggleHideContent ({ prompt, children }) {
  const [ shown, setShown ] = useState(false)

  return (
    <>
      <span onClick={() => setShown(!shown)} style={{fontStyle: 'italic', color: 'blue'}}>{shown || prompt}</span>

      <div style={{display: (shown ? 'block' : 'none')}}>
        {children}
      </div>
    </>
  )
})

