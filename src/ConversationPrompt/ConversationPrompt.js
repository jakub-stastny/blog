import React, { memo } from 'react'
import HashTag from '../HashTag/HashTag'
import { assert } from '../utils'
import styles from './ConversationPrompt.module.css'
import { A } from 'hookrouter'
import { aboutPagePath } from '../routes'
import { registerFont, FontAwesomeIcon } from '../FontAwesome/FontAwesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

registerFont(faArrowRight)

const prompts = {
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
      I'm from Czech Republic&nbsp;🇨🇿 and after I have lived in various place&nbsp; 🇬🇧🇪🇸🇵🇱,  I finally found my home in sunny Mexico&nbsp;🇲🇽.
    </p>
  </>
}

const findPrompt = (prompts, tagNames) => {
  const result = Object.entries(prompts).find(([ promptTagName ]) => (
    tagNames.includes(promptTagName)
  ))
  return result && result[1]
}

export default memo(function ConversationPrompt ({ tagNames = [] }) {
  const prompt = tagNames.includes('now') ? prompts.default : (findPrompt(prompts, tagNames) || prompts.default)

  return (
    <div className={assert(styles.compact)}>
      {prompt}

      <p>
        <FontAwesomeIcon icon={faArrowRight} color="darkgreen" />{' '}
        {/* FIXME: why is aboutPagePath undefined? */}
        You can find out more about me on the <A href={aboutPagePath || '/about'}>about page</A>.
      </p>
    </div>
  )
})
