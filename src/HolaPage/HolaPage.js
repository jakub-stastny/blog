import React, { memo, useContext } from 'react'
import LangContext from '../LangContext'
import { useTitle } from 'hookrouter'

import ContentEN from './content.en.js'
import ContentES from './content.es.js'

const translations = {
  title: ["Hey there!", "¡Hola!"],
  content: [<ContentEN />, <ContentES />]
}

export default memo(function HolaPage () {
  const { t } = useContext(LangContext)

  useTitle(t(translations.title))

  return t(translations.content)
})
