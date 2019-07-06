/* TODO: Use it like so:

<MyErrorBoundary>
  <Suspense fallback={<Spinner />}>
    ...
  </Suspense>
</MyErrorBoundary>

See https://reactjs.org/docs/code-splitting.html
*/

import React, { Fragment, memo } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { registerFont, FontAwesomeIcon } from '../FontAwesome/FontAwesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

registerFont(faSpinner)

export default memo(() => (
  <Fragment>
    <FontAwesomeIcon icon={faSpinner} spin={true} />{' '}
    Loading ...
  </Fragment>
))
