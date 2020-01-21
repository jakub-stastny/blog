import React, { createContext, useState } from 'react'
import { assert } from './utils'

const LangContext = createContext()

export function LangContextProvider ({ children }) {
  const defaultLanguage = (navigator.language || '').match(/^es/) ? 'es' : 'en'
  const setLanguage = localStorage.getItem('lang')

  const [ lang, setLang ] = useState(setLanguage || defaultLanguage)

  const t = ([ enTranslation, esTranslation ]) => assert(lang === 'en' ? enTranslation : esTranslation)

  const nowTag = t(["now", "ahora"])

  return (
    <LangContext.Provider value={{lang, setLang, t, nowTag}}>
      {children}
    </LangContext.Provider>
  )
}

export default LangContext
