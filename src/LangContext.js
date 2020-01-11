import React, { createContext, useState } from 'react'

const LangContext = createContext()

export function LangContextProvider ({ children }) {
  const defaultLanguage = (navigator.language || '').match(/^es/) ? 'es' : 'en'

  const [ lang, setLang ] = useState(defaultLanguage)

  return (
    <LangContext.Provider value={{lang}}>
      {children}
    </LangContext.Provider>
  )
}

export default LangContext
