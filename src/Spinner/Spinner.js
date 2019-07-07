/* TODO: Use it like so:

<MyErrorBoundary>
  <Suspense fallback={<Spinner />}>
    ...
  </Suspense>
</MyErrorBoundary>

See https://reactjs.org/docs/code-splitting.html
*/

import React, { Fragment, Suspense, memo } from 'react'
import { registerFont, FontAwesomeIcon } from '../FontAwesome/FontAwesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

registerFont(faSpinner)

export const SuspenseSpinner = memo(({ children }) => (
  <Suspense fallback={<Spinner />}>
    {children}
  </Suspense>
))

const Spinner = memo(() => (
  <Fragment>
    <FontAwesomeIcon icon={faSpinner} spin={true} />{' '}
    Loading ...
  </Fragment>
))

export default Spinner
