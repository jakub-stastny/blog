// TODO: Move FetchError in here.
import React from 'react'

export default function RoutingError () {
  return <h2>No match for <code>{window.location.pathname}</code></h2>
}
