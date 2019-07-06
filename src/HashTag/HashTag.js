import React, { memo } from 'react'
import { hashtag as hashtagClassName } from './HashTag.module.css'
import { assert } from '../utils'

assert(hashtagClassName, 'hashtagClassName is expected to be defined')

export default memo(({ children }) => (
  <span className={hashtagClassName}>{children}</span>
))
