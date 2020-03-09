import React, { createContext, useState } from 'react'
import { assert } from './utils'

const LangContext = createContext()

const validateLanguage = (lang) => (
  ['es', 'en'].includes(lang) && lang
)

export function LangContextProvider ({ children }) {
  const browserOrDefaultLanguage = (navigator.language || '').match(/^es/) ? 'es' : 'en'
  const setLanguage = localStorage.getItem('lang')

  const [ lang, _setLang ] = useState(validateLanguage(setLanguage) || browserOrDefaultLanguage)

  function setLang(toLang) {
    if (validateLanguage(toLang)) {
    _setLang(toLang)
    } else {
      console.error(`Lang not supported: ${toLang}`)
    }
  }

  const t = ([ enTranslation, esTranslation ]) => assert(lang === 'en' ? enTranslation : esTranslation)

  // TODO: use TagsPage/translations.
  const nowTag = t(['now', 'ahora'])

  return (
    <LangContext.Provider value={{lang, setLang, t, nowTag}}>
      {children}
    </LangContext.Provider>
  )
}

export default LangContext
