import React, { memo, useContext } from 'react'
import LangContext from '../LangContext'
import { useTitle } from 'hookrouter'

import ContentEN from './content.en.js'
import ContentES from './content.es.js'

const translations = {
  title: ["Hey there!", "¡Hola!"],
  content: [<ContentEN />, <ContentES />]
}

export default memo(function HolaPage ({ lang }) {
  const { t, setLang } = useContext(LangContext)

  setLang(lang)

  useTitle(t(translations.title))

  return t(translations.content)
})
