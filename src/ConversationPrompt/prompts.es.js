import React from 'react'
import HashTag from '../HashTag/HashTag'
import { CZ, UK, ES, PL, MX } from '../flags'

export default {
  /* NOTE: keep in sync with the header tagline. */
  default: <>
    <p>
      Hola, me llamo Jakub. Me interesa el <HashTag>minimalismo</HashTag>,{' '}
      <HashTag>espiritualidad</HashTag> y <HashTag>TI</HashTag>.
    </p>

    <p>
      Soy de la República Checa&nbsp;{CZ} y después de había vivido en países distintos&nbsp;{UK}{ES}{PL}, finalmente he encontrado mi hogar en México&nbsp;{MX} soleado.
    </p>
  </>
}
