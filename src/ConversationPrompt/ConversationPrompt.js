import React, { memo } from 'react'
import HashTag from '../HashTag/HashTag'

const prompts = {
  'language learning': (
    <p>
      Have you found my approach to learning languages valuable?
      Let me know what do you think! {/* TODO: email */}
      And if you're so inclined, I also offer coaching on strategies of language learning.
    </p>
  ),
  default: (
    <p>
      Hi, my name is James. I'm a <HashTag>Ruby</HashTag>, <HashTag>Ruby on Rails</HashTag>, <HashTag>JavaScript</HashTag> and <HashTag>React.js</HashTag> developer available for freelance work.
    </p>
  )
}

const findPrompt = (prompts, tagNames) => {
  const result = Object.entries(prompts).find(([ promptTagName ]) => (
    tagNames.includes(promptTagName)
  ))
  return result && result[1]
}

export default memo(({ tagNames = [] }) => (
  findPrompt(prompts, tagNames) || prompts.default
))
