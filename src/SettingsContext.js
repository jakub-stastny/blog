import React, { createContext, useState, useEffect } from 'react'
import queryString from 'query-string'

const SettingsContext = createContext()

function parseBooleanFromLocalStorage (key, defaultValue) {
  const value = localStorage.getItem(key)
  const validValue = value && ['true', 'false'].includes(value)
  return validValue ? JSON.parse(validValue) : defaultValue
}

function generateWritter (key, writterFn) {
  return function (value) {
    localStorage.setItem(key)
    writterFn(value)
  }
}

export function SettingsContextProvider ({ children }) {
  const [ dev, _setDev ] = useState(parseBooleanFromLocalStorage('dev', false))
  const [ dbg, _setDbg ] = useState(parseBooleanFromLocalStorage('dbg', false))

  const [ referrer, _setReferrer ] = useState(localStorage.getItem('referrer')) // TODO: validate options

  const setDbg = generateWritter('dbg', _setDbg)
  const setDev = generateWritter('dev', _setDev)
  const setReferrer = generateWritter('referrer', _setReferrer)

  useEffect(() => {
    const qs = queryString.parse(window.location.search, {parseBooleans: true})

    // ?from=mail
    qs.from && setReferrer(qs.from)

    // ?dev={true,false}
    [true, false].includes(qs.dev) && setDev(qs.dev)
    [true, false].includes(qs.dbg) && setDbg(qs.dbg)
  })

  return (
    <SettingsContext.Provider value={{referrer, setReferrer, dev, setDev, dbg, setDbg}}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsContext
