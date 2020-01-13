import React, { Suspense, memo, useState, useContext, useEffect } from 'react'
import LangContext from '../LangContext'
import { registerFont, FontAwesomeIcon } from '../FontAwesome/FontAwesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { assert } from '../utils'
import styles from './Spinner.module.css'

const translations = {
  suspense: {
    title: ["the component", "el componente"],
  },
  spinner: {
    loading: ["Loading", "Cargando"],
    tooLong: ["Taking too long?", "¿Toma demasiado tiempo?"],
    reload: ["Click to reload", "Haz click para volver a cargar"],
  }
}

registerFont(faSpinner)

export const SuspenseSpinner = memo(function SuspenseSpinner ({ children }) {
  const { t } = useContext(LangContext)

  return (
    <Suspense fallback={<Spinner title={t(translations.suspense.title)} />}>
      {children}
    </Suspense>
  )
})

const Spinner = memo(function Spinner ({ title }) {
  const { t } = useContext(LangContext)

  const [ takingTooLong, setTakingTooLong ] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => { setTakingTooLong(true) }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const ReloadLink = () => (
    <>
      <em>{t(translations.spinner.tooLong)}</em> <a className={assert(styles.link)} href={window.location.href}>{t(translations.spinner.reload)}</a>.
    </>
  )

  return (
    <div style={{marginTop: 10, marginBottom: 10}}>
      <FontAwesomeIcon icon={faSpinner} spin={true} />{' '}
      <span style={{color: 'slategrey'}}>
        {[t(translations.spinner.loading), title, '...'].filter(Boolean).join(' ')}
        {takingTooLong && <div style={{marginTop: 20}}><ReloadLink /></div>}
      </span>
    </div>
  )
})

export default Spinner
