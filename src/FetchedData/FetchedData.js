import React, { Fragment, useState, useEffect } from 'react'
import Spinner from '../Spinner/Spinner'
import { assert } from '../utils'

export function useFetchedData (url, defaultFetchedDataValue) {
  const [isLoading, setIsLoading] = useState(true)
  const [fetchedData, setFetchedData] = useState(defaultFetchedDataValue)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
    // We get the API response and receive data in JSON format...
    .then(response => response.json())
    // ...then we update the users state
    .then(data => {
      setIsLoading(false)
      setFetchedData(data)
    })
    // Catch any errors we hit and update the app
    .catch(error => {
      setIsLoading(false)
      setError(error)
    })
  })

  return [isLoading, fetchedData, error]
}

export default function FetchedData ({ isLoading, error, children }) {
  assert(children, 'Children are required')

  // TODO: Center these to the centre of the page.
  if (isLoading) {
    return <Spinner />
  } else if (error) {
    console.log(error)
    return <Fragment>
      <h1>{error.name}</h1>
      <p>{error.message}</p>
    </Fragment>
  } else {
    return children
  }
}
