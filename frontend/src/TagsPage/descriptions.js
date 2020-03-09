import React from 'react'
import OutboundLink from '../OutboundLink/OutboundLink'

const Derek = ({ children }) => (
  <OutboundLink eventLabel="derek-sivers" to="https://sivers.org/nowff">
    {children}
  </OutboundLink>
)

export default {
  now: {
    en: <>
      The now page is <Derek>Derek Siver's idea</Derek> to respond the question <em>"what have you been up to lately?"</em>.
      This is archive of all my past updates.
    </>,
    es: <>
      La página ahora es <Derek>idea de Derek Siver's</Derek> para responder la pregunta <em>"¿qué estaba haciendo recientemente?"</em>
      Esto es al archivo de todas mis actualizaciones pasadas.
    </>
  },

  diving: {
    en: "Diving is one of my favourite activities, ever since I started in January 2018.",
    es: "Buceo es una de mis actividades favoritas, desde cuando empecé en enero de 2018."
  },

  TCM: {
    en: "Tradicional Chinese medicine helped to improve my health.",
    es: "La medicina china tradicional me ayudó mejorar mi salid."
  },

  God: {
    en: <>
      My idea of God is more modern, more in the notion of <em>Light</em>, <em>Universe</em>, not as an wise old man sitting somewhere in the clouds.
    </>,
    es: <>
      Mi idea de Dios es más moderna, más como la noción de <em>La Luz</em>, <em> El Universo</em>, no como un viejo sentado en el cielo.
    </>
  },

  healing: {
    en: "During my spiritual awakening, I found to my great surprise that I can do healings with hands or remotely. While I like doing so, I'm not an expert on the subject and I'm still unclear about many things of its functioning.",
    es: "Durante mi despertar espiritual, descubrí a mi gran sorpresa, que puedo sanar con mis manos o a distancia. A pesar de que me gusta y disfruto hacerlo, no soy experto al tema y todavía hay muchas cosas que no me quedan claras."
  }
}
