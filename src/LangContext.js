import React, { createContext, useState } from 'react'

const LangContext = createContext()

export function LangContextProvider ({ children }) {
  const defaultLanguage = (navigator.language || '').match(/^es/) ? 'es' : 'en'

  const [ lang, setLang ] = useState(defaultLanguage)

  const t = (enTranslation, esTranslation) => lang === 'en' ? enTranslation : esTranslation

  return (
    <LangContext.Provider value={{lang, t}}>
      {children}
    </LangContext.Provider>
  )
}

export default LangContext
