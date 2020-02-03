import React  from 'react'
import { A } from 'hookrouter'
import Email from '../Email/Email'
import Highlight from '../Highlight/Highlight'
import Gravatar from '../Gravatar/Gravatar'
import { CZ, MX } from '../flags'

import { assert } from '../utils'
import styles from './AboutPage.module.css'

export default ({ lastStatusUpdateLink, myStoryPath, HashTags }) => (
  <>
    <Highlight title="¿Qué hago estos días?" style={{marginTop: 20, background: 'whitesmoke'}}>
      <p>
        Si te interesa a que me dedico estos días, aquí está mi {lastStatusUpdateLink}.
      </p>
    </Highlight>

    <h1 className={assert(styles.mainTitle)}>¡Hola! Me llamo Jakub.</h1>
    <div className={assert(styles.gravatarBox)}>
      <Gravatar className={assert(styles.gravatar)} />

      <p>
        Soy de un pueblo pequeño en el medio de la nada en la República Checa <CZ />. Gracias a Dias ahora vivo en México soleado ☀️<MX />
      </p>

      <p>
        Pasé mi adolescencia burlándome de mis maestros, mis años 20s viajando y viviendo alrededor
        del mundo (en parte en alojamientos normales, en parte en mi furgoneta) y aprendiendo todo
        de idiomas raro, kung-fu a baile y como cocinar la carne de yak.
      </p>

      <p>
        Hago cosas en la manera que me parece <em>correcta para mi</em>. Desde cuando era niño,
        caminaba mi propio camio, ignorando el consejo convencional y la presión social.
        Dejé los estudios de la secundaria porque me pareció pérdida de tiempo.
        A pesar de que me decían que vaya a acabar lavando platos en MC Donald's,
        creé una carera en TI en menos que un año, gracias a que podía viajar el mundo como
        un nómada digital.
      </p>

      {/* TODO: link vinculacion and spiritual awakening tag */}
      <p>
        Después de mi desperto espiritual, decidí concentrar mis esfuerzos
        a ayudar a la gente, prestando consejo espiritual, después de que me había dado cuenta
        (a mi gran sorpresa) que tengo dones espirituales como saber vincularme con personas,
        y por consiguiente sentir si algo está pasando a ellos, tener visiones, percepciones
        dentro de los almas de la gente y generalmente <em>"saber cosas"</em>.
      </p>

      <p>
        Si te interesa saber más, aquí es <A href={myStoryPath}>la historia de mi vida</A>{' '}
        empacada para consumción rápida (sí, lleva servilletas).
      </p>

      <p>
        Algunas cosas que me agradan: <HashTags hashtags={
          ['baile', 'blues', 'jazz', 'buceo', 'terapia', 'naturaleza', 'espiritualidad']
        } />
      </p>

      <Highlight title="My contact">
        <p>
          Soy amigable. Bueno, generalmente. Bueno, a veces. O sea ... no muerdo. Normalmente.
          Si quieres contactarme, no dudes escribirme a <Email />.
        </p>
      </Highlight>
    </div>
  </>
)
