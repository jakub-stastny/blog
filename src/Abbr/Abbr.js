import React from 'react'
import { assert } from '../utils'

/* TODO: Currently this doesn't do anything useful. */
/* The intended purpose of this is to have an <abbr /> alternative
 * that works on mobile. It's supposed to show a JS tooltip. */

export default function ({ title, children }) {
  assert(title, 'Title is required')
  assert(children, 'Children are required')
  return <abbr title={title}>{children}</abbr>
}
