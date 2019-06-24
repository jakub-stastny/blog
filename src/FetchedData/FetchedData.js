import React, { Fragment, useState, useEffect } from 'react'
import Spinner from '../Spinner/Spinner'
import { assert } from '../utils'

function request (url, fn) {
  console.log(`~ Fetching ${url}`)
  return new Promise((resolve, reject) => {
    _request(url, fn, resolve, reject)
  })
}

function _request(url, fn, resolve, reject, run = 1) {
  if (run > 4) {
    return reject({name: 'TimeOut'})
  }

  const controller = new AbortController()
  const signal = controller.signal

  // The first is to warm up the cache.
  const timeoutSec = run === 1 ? run : 10
  const timeoutId = setTimeout(() => {
    console.log(`~ Restarting the request after ${timeoutSec}s timeout.`)
    controller.abort()
    _request(url, fn, resolve, reject, run + 1)
  }, timeoutSec * 1000)

  // Adding ?random to disable server-side caching.
  // When GH times out with HTTP 503, this response
  // gets cached and plain refresh doesn't help.
  const promise = fetch(`${url}?${Math.floor(Math.random() * 10000)}`, {signal})

  promise.then((response) => {
    clearTimeout(timeoutId)
    if (response.ok) {
      response.json().then(data => {
        resolve(data)
      })
    } else {
      console.log(response)
      reject(response) /* Error is a response in this case. */
    }
  })

  promise.catch((error) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/DOMException
    if (error.name !== 'AbortError') {
      clearTimeout(timeoutId)
      reject(error) /* Error is an exception instance in this case. */
    }
  })
}

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

    const promise = request(url)
    console.log(promise)

    promise.then(data => {
      setFetchedData(data)
      setIsLoading(false)
    })

    promise.catch(error => {
      setError(error)
      setIsLoading(false)
    })

    setWasFired(true) ////

    // return () => {
    //   console.log('~ Cleaning up')
    //   clearTimeout(timeoutId)
    //   controller.abort()
    // }
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
