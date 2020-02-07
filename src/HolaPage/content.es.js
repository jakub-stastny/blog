import React from 'react'
import ContactInfo, { vCard } from './ContactInfo'
import Card from './Card'
import { assert } from '../utils'
import styles from './HolaPage.module.css'
import { registerFont, FontAwesomeIcon } from '../FontAwesome/FontAwesome'
import { faArrowRight, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import Gravatar from '../Gravatar/Gravatar'
import { A } from 'hookrouter'

registerFont(faArrowRight, faAddressCard)

export default () => (
  <>
    <h1>¡Hola!</h1>
    <h2 style={{fontStyle: 'italic'}}>I see you came from the link on my business card. Welcome!</h2>
    <div className={assert(styles.gravatarBox)}>
      <Gravatar className={assert(styles.gravatar)} />

      <p>
        Since we met in person, I'm happy to give you my full contact details. But before I do that, I'd like to ask you a favour:
      </p>
    </div>

    {/* TODO: Give it a warning icon and heading. */}
    <div style={{background: 'maroon', color: 'white', borderRadius: 15, padding: 10}}>
      <p>
        Por favor no compartes esta página con nadie. Nada más es para ti.
      </p>

      <p>
        This page exists for your convenience, so that you have my contact even in case I change my email or delete my Telegram.
      </p>

      <p>
        Of course feel free to link to <em>any other page</em> on this blog. Only this page <code>{window.location.href}</code> is on need-to-know only basis.
      </p>

      <p>
        Thank you for respecting my privacy!
      </p>
    </div>


    <ContactInfo />

    <Card block={(card) => {
      card.title = "Guía espiritual"
      card.note = [
        "Mi iMessage es lo mismo como mi correo.",
        "No tengo celular, WhatsApp, Facebook ni nada de los otros redes sociales.",
        `Detalles en esta tarjeta pueden cambiar. Siempre puedes encontrar mi contacto actual en ${window.location.href}`
      ].join("\n\n")
    }}>
      <FontAwesomeIcon icon={faAddressCard} /> Haz click para añadirme a tus contactos
    </Card>

    <p style={{color: 'dimgrey', fontStyle: 'italic'}}>
      As I probably told you, I don't have WhatsApp, FB or even phone,
      so these are the only means of contacting me.
    </p>

    {/* TODO: Give it a heading and make it a box. */}
    <div style={{marginTop: 30, fontSize: 18}}>
      <FontAwesomeIcon icon={faArrowRight} color="darkgreen" />{' '}
      <A href="/">Check out my blog</A>
    </div>
  </>
)
