import React from 'react'
import { OutboundLink } from 'react-ga'

export default ({ to, children }) => (
  <OutboundLink to={to} target="_blank">{children}</OutboundLink>
)
