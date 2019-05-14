import React, { Fragment } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(faSpinner)

export default () => <Fragment>
  <FontAwesomeIcon icon={faSpinner} spin={true} />{' '}
  Loading ...
</Fragment>
