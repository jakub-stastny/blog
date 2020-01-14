import React from 'react'
import HashTag from '../HashTag/HashTag'
import { CZ, UK, ES, PL, MX } from '../flags'

export default {
  spirituality: <>
    <p>
      Hi, my name is Jakub. <HashTag link>spirituality</HashTag> is one of my favourite topics and one I have a decent experience in.
    </p>

    <p>
      ...
    </p>
  </>,

  it: <>
    <p>
      Hi, my name is Jakub. <HashTag link>IT</HashTag> is one of my favourite topics.
    </p>

    <p>
      <HashTag link>Ruby</HashTag>
    </p>
  </>,

  /* NOTE: keep in sync with the header tagline. */
  default: <>
    <p>
      Hi, my name is Jakub. I'm interested in <HashTag link>minimalism</HashTag>,{' '}
      <HashTag link>spirituality</HashTag> and <HashTag link>IT</HashTag>.
    </p>

    <p>
      I'm from Czech Republic&nbsp;{CZ} and after I have lived in various places&nbsp;{UK}{ES}{PL} I finally found my home in Sunny Mexico&nbsp;{MX}.
    </p>
  </>
}
