import React, { Suspense, memo } from 'react'
import { registerFont, FontAwesomeIcon } from '../FontAwesome/FontAwesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

registerFont(faSpinner)

export const SuspenseSpinner = memo(({ children }) => (
  <Suspense fallback={<Spinner title="the component" />}>
    {children}
  </Suspense>
))

const Spinner = memo(({ title }) => (
  <div style={{marginTop: 10, marginBottom: 10}}>
    <FontAwesomeIcon icon={faSpinner} spin={true} />{' '}
    <span style={{color: 'slategrey'}}>
      {['Loading', title, '...'].filter(Boolean).join(' ')}
    </span>
  </div>
))

export default Spinner
