import React, { Fragment, useState, useEffect } from 'react'
import Spinner from '../Spinner/Spinner'
import { assert } from '../utils'

export function useFetchedData (url, defaultFetchedDataValue) {
  const [isLoading, setIsLoading] = useState(true)
  const [fetchedData, setFetchedData] = useState(defaultFetchedDataValue)
  const [error, setError] = useState(null)
  // TODO: I think this could be solved by memoization.
  // Or some other systematic way. If this effect is called only
  // as componentDidMount, we're all good.
  const [wasFired, setWasFired] = useState(false) ////

  useEffect(() => {
    if (wasFired) return ////
    console.log(`~ Fetching ${url}`)
    fetch(url)
    // We get the API response and receive data in JSON format...
    .then(response => response.json())
    // ...then we update the users state
    .then(data => {
      // The order is important! Otherwise we will do two renders of the inner component of FetchedData,
      // calling it first time with undefined as data, most likely causing errors.
      setFetchedData(data)
      setIsLoading(false)
    })
    // Catch any errors we hit and update the app
    .catch(error => {
      setError(error)
      setIsLoading(false)
    })

    setWasFired(true) ////

    // TODO: cleanup
    return () => {
      // https://stackoverflow.com/questions/49906437/how-to-cancel-a-fetch-on-componentwillunmount
    }
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
    // TODO:
    // import { FetchError } from '../Errors/Errors'
    // if (error) return <FetchError error={error} />
    return <Fragment>
      <h1>{error.name}</h1>
      <p>{error.message}</p>
    </Fragment>
  } else {
    return children
  }
}
