import React  from 'react'
import Email from '../Email/Email'
import Highlight from '../Highlight/Highlight'

import { assert } from '../utils'
import styles from './AboutPage.module.css'

export default ({ lastStatusUpdateLink, children }) => (
  <>
    <h1 className={assert(styles.mainTitle)}>¡Hola! Me llamo Jakub.</h1>
    <p>
      Si quieres contactarme, no dudes escribirme a <Email />.
    </p>

    <Highlight title="¿Qué hago estos días?">
      <p>
        Si te interesa a que me dedico estos días, regularmente escribo una actualización.
        Aquí es el último:{' '}
        {lastStatusUpdateLink}.
      </p>
    </Highlight>

    {children}
  </>
)
