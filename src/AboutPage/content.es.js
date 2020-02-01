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
        I spent my teens taking the piss out of my teachers, my 20s travelling and living
        around the world (partly in normal housing, partly in my van) and learning anything from
        weird languages, kung-fu to dancing and cooking yak meat.
      </p>

      <p>
        I do things the way that's right <em>for me</em>. Ever since I was a child, I was trotting
        my own path, ignoring the conventional advice and peer pressure. I proudly dropped out of
        my secondary school and despite being told I'd end up <em>"washing dishes in MC Donald's"</em>,
        I built a career in IT in under a year thanks to which I ended up travelling the world
        as a digital nomad.
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
