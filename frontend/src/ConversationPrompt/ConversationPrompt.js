import React, { memo, useContext } from 'react'
import LangContext from '../LangContext'
import { assert } from '../utils'
import styles from './ConversationPrompt.module.css'
import { A } from 'hookrouter'
import * as routes from '../routes'
import { registerFont, FontAwesomeIcon } from '../FontAwesome/FontAwesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import promptsEN from './prompts.en'
import promptsES from './prompts.es'

registerFont(faArrowRight)

const findPrompt = (prompts, tagNames) => {
  const result = Object.entries(prompts).find(([ promptTagName ]) => (
    tagNames.includes(promptTagName)
  ))
  return result && result[1]
}

export default memo(function ConversationPrompt ({ tagNames = [] }) {
  const { t, lang, nowTag } = useContext(LangContext)
  const prompts = (lang === 'en') ? promptsEN : promptsES

  const prompt = tagNames.includes(nowTag) ? prompts.default : (findPrompt(prompts, tagNames) || prompts.default)

  const { aboutPagePath } = routes[lang]

  const translations = {
    about: [
      <>You can find out more about me on the <A href={aboutPagePath}>about page</A>.</>,
      <>Puedes encontrar más sobre mi en la página <A href={aboutPagePath}>sobre mi</A>.</>,
    ]
  }

  return (
    <div className={assert(styles.compact)}>
      {prompt}

      <p>
        <FontAwesomeIcon icon={faArrowRight} color="darkgreen" />{' '}
        {t(translations.about)}
      </p>
    </div>
  )
})
