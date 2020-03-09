import React, { createContext, useState, useEffect } from 'react'
import queryString from 'query-string'

const SettingsContext = createContext()

function parseBooleanNumberOrDefault (value, fn = (value) => value) {
  if (['0', '1'].includes(value)) return fn(parseInt(value))
}

function parseBooleanFromLocalStorage (key, defaultValue) {
  const value = localStorage.getItem(key)
  const parsedNumber = parseBooleanNumberOrDefault(value)
  return parsedNumber === 1
}

function generateWritter (key, writterFn) {
  return function (value) {
    if (value === '') {
      localStorage.removeItem(key)
      writterFn(null)
    } else {
      localStorage.setItem(key, value)
      writterFn(value)
    }
  }
}

export function SettingsContextProvider ({ children }) {
  const [ dev, _setDev ] = useState(parseBooleanFromLocalStorage('dev', 0))
  const [ dbg, _setDbg ] = useState(parseBooleanFromLocalStorage('dbg', 0))

  const [ referrer, _setReferrer ] = useState(localStorage.getItem('referrer')) // TODO: validate options

  const setDbg = generateWritter('dbg', _setDbg)
  const setDev = generateWritter('dev', _setDev)
  const setReferrer = generateWritter('referrer', _setReferrer)

  useEffect(() => {
    // NOTE: parseNumbers doesn't seem to be working
    const qs = queryString.parse(window.location.search, {parseNumbers: true})

    // ?from=mail
    if (qs && Object.prototype.hasOwnProperty.call(qs, 'from')) setReferrer(qs.from)

    // ?dev={true,false}
    parseBooleanNumberOrDefault(qs.dev, setDev)
    parseBooleanNumberOrDefault(qs.dbg, setDbg)
  })

  return (
    <SettingsContext.Provider value={{referrer, setReferrer, dev: (dev === 1), setDev, dbg: (dbg === 1), setDbg}}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsContext
