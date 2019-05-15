/* TODO: Use it like so:

<MyErrorBoundary>
  <Suspense fallback={<Spinner />}>
    ...
  </Suspense>
</MyErrorBoundary>

See https://reactjs.org/docs/code-splitting.html
*/

import React, { Fragment } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(faSpinner)

export default function Spinner () {
  return <Fragment>
    <FontAwesomeIcon icon={faSpinner} spin={true} />{' '}
    Loading ...
  </Fragment>
}
