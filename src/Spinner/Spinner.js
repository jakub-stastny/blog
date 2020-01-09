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
  <>
    <FontAwesomeIcon icon={faSpinner} spin={true} />{' '}
    {['Loading', title, '...'].join(' ')}
  </>
))

export default Spinner
