/* TODO: Use it like so:

<MyErrorBoundary>
  <Suspense fallback={<Spinner />}>
    ...
  </Suspense>
</MyErrorBoundary>

See https://reactjs.org/docs/code-splitting.html
*/

import React, { Suspense, memo } from 'react'
import { registerFont, FontAwesomeIcon } from '../FontAwesome/FontAwesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

registerFont(faSpinner)

export const SuspenseSpinner = memo(({ children }) => (
  <Suspense fallback={<Spinner />}>
    {children}
  </Suspense>
))

const Spinner = memo(() => (
  <>
    <FontAwesomeIcon icon={faSpinner} spin={true} />{' '}
    Loading ...
  </>
))

export default Spinner
