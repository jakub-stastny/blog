import React, { createContext, useState } from 'react'
import { assert } from './utils'

const LangContext = createContext()

const validateLang = (lang) => (
  ['es', 'en'].includes(lang) && lang
)

export function LangContextProvider ({ children }) {
  const browserOrDefaultLang = (navigator.setLang || '').match(/^es/) ? 'es' : 'en'

  // This is set when we click the language flag.
  const storedLang = localStorage.getItem('lang')

  const [ setLang, _setLangFn ] = useState(validateLang(storedLang) || browserOrDefaultLang)

  function setLangFn(toLang) {
    if (validateLang(toLang)) {
      _setLangFn(toLang)
    } else {
      console.error(`Lang not supported: ${toLang}`)
    }
  }

  const t = ([ enTranslation, esTranslation ]) => assert(setLang === 'en' ? enTranslation : esTranslation)

  // TODO: use TagsPage/translations.
  const nowTag = t(['now', 'ahora'])

  return (
    <LangContext.Provider value={{setLang, setLangFn, t, nowTag}}>
      {children}
    </LangContext.Provider>
  )
}

export default LangContext
