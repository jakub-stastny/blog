import React, { createContext, useState, useEffect } from 'react'
import queryString from 'query-string'

const SettingsContext = createContext()

export function SettingsContextProvider ({ children }) {
  const [ dev, _setDev ] = useState(localStorage.getItem('dev') ? JSON.parse(localStorage.getItem('dev')) : false)
  const [ referrer, _setReferrer ] = useState(localStorage.getItem('referrer')) // TODO: validate options

  function setDev (boolean) {
    localStorage.setItem('dev', boolean)
    _setDev(boolean)
  }

  function setReferrer (referrer) {
    localStorage.setItem('referrer', referrer)
    _setReferrer(referrer)
  }

  useEffect(() => {
    const qs = queryString.parse(window.location.search)

    qs.from && setReferrer(qs.from)
    // Allow for ?dev without value.
    ('dev' in qs) && setDev(true)
  })

  return (
    <SettingsContext.Provider value={{referrer, setReferrer, dev, setDev}}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsContext
