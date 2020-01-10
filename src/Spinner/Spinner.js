import React, { Suspense, memo, useState, useEffect } from 'react'
import { registerFont, FontAwesomeIcon } from '../FontAwesome/FontAwesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { assert } from '../utils'
import styles from './Spinner.module.css'

registerFont(faSpinner)

export const SuspenseSpinner = memo(({ children }) => (
  <Suspense fallback={<Spinner title="the component" />}>
    {children}
  </Suspense>
))

const ReloadLink = () => (
  <>
    <em>Taking too long?</em> <a className={assert(styles.link)} href="">Click to reload</a>.
  </>
)

const Spinner = memo(function Spinner ({ title }) {
  const [ takingTooLong, setTakingTooLong ] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => { setTakingTooLong(true) }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{marginTop: 10, marginBottom: 10}}>
      <FontAwesomeIcon icon={faSpinner} spin={true} />{' '}
      <span style={{color: 'slategrey'}}>
        {['Loading', title, '...'].filter(Boolean).join(' ')}
        {takingTooLong && <div style={{marginTop: 20}}><ReloadLink /></div>}
      </span>
    </div>
  )
})

export default Spinner
