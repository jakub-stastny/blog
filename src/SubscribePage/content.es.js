import React, { memo } from 'react'
import { A } from 'hookrouter'
import NewsletterSignUpForm, { NewsletterSignUpLink } from '../NewsletterSignUpForm/NewsletterSignUpForm'
import Email from '../Email/Email'
import ToggleHideContent from '../ToggleHideContent/ToggleHideContent'
import AdBlockDetect from '../AdBlockDetect/AdBlockDetect'
import Highlight from '../Highlight/Highlight'
import OutboundLink from '../OutboundLink/OutboundLink'
import { assert } from '../utils'
import { es as routes } from '../routes'
import styles from './SubscribePage.module.css'

export default memo(function ContentES () {
  return (
    <>
      <h1>Cómo mantener contacto</h1>

      <h2>Boletín trimestral</h2>
      <p>
        Esto es una selección trimestral de las mejores entradas. <em>También a veces escribo cosas que no publico al blog.</em>
      </p>

      <AdBlockDetect>
        <Highlight title="Bloqueador de anuncios" style={{background: 'mistyrose', marginBottom: 15}}>
          <p>
            Tu bloqueador de anuncios está activado. Esto a veces <em>puede prevenir entrega del formulario</em> (
            <OutboundLink eventLabel="gh-mailchimp-issue" to="https://github.com/gndx/react-mailchimp-form/issues/11">gndx/react-mailchimp-form#11</OutboundLink>
            ).
          </p>

          <p>
            Si te pase a ti, por favor <NewsletterSignUpLink>subscríbete directamente aquí</NewsletterSignUpLink>.
          </p>
        </Highlight>
      </AdBlockDetect>

      <div className={assert(styles.form)}>
        <NewsletterSignUpForm />
      </div>

      <div style={{marginTop: 25}}>
        <ToggleHideContent prompt="¿Buscando más opciones?">
          <div className={assert(styles.disabled)}>
            <h2>Notificación acerca de todas las entradas por correo</h2>
            <p>
              En este momento no mantengo esta opción. Si te gustaría que la tenga, por favor <Email subject="Notificaciones de entradas por correo">avísame</Email>.
            </p>

            <h2>RSS feed</h2>
            <p>
              En este momento no mantengo esta opción. Si te gustaría que la tenga, por favor <Email subject="RSS en tu blog">avísame</Email>.
            </p>

            <h2>Redes sociales</h2>
            <p>
              En este momento no tengo ningunas cuentas de redes sociales. Hice esta decisión para <A href={routes.getPostPagePath('adios-facebook')}>proteger mi salud mental</A> y no voy a cambiar mi opinión.
            </p>

            <p>
              Creo en contacto personal y escrituras más largas, que requieren atención, y tienen una mensaje que vale la pena – no solo pláticas inútiles de con quien me puse pedo anoche y cuantas chelas tomamos.
            </p>
          </div>
        </ToggleHideContent>
      </div>
    </>
  )
})
