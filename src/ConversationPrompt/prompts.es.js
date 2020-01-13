import React from 'react'
import HashTag from '../HashTag/HashTag'

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
      {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
      I'm from Czech Republic&nbsp;🇨🇿 and after I have lived in various place&nbsp; 🇬🇧🇪🇸🇵🇱,  I finally found my home in sunny Mexico&nbsp;🇲🇽.
    </p>
  </>
}
