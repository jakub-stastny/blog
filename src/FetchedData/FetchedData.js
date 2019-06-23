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
    // Adding ?random to disable server-side caching.
    // When GH times out with HTTP 503, this response
    // gets cached and plain refresh doesn't help.
    fetch(`${url}?${Math.floor(Math.random() * 10000)}`)
    .then(response => {
      if (response.ok) {
        // The order is important! Otherwise we will do two renders of the inner component of FetchedData,
        // calling it first time with undefined as data, most likely causing errors.
        response.json().then(data => {
          setFetchedData(data)
          setIsLoading(false)
        })
      } else {
        console.log(response)
        setError(response) /* Error is response in this case. */
        setIsLoading(false)
      }
    })
    // Catch any errors we hit and update the app
    .catch(error => {
      console.log(error)
      setError(error) /* Error is an exception instance in this case. */
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

const DefaultErrorReporter = ({ error }) => (
  <Fragment>
    <h1>{error.name}</h1>
    <p>{error.message}</p>
  </Fragment>
)

export default function FetchedData ({ isLoading, error, errorReporter, children }) {
  assert(children, 'Children are required')

  // TODO: Center these to the centre of the page.
  if (isLoading) {
    return <Spinner />
  } else if (error) {
    console.log(error)
    // TODO:
    // import { FetchError } from '../Errors/Errors'
    // if (error) return <FetchError error={error} />
    return errorReporter || <DefaultErrorReporter error={error} />
  } else {
    return children
  }
}
