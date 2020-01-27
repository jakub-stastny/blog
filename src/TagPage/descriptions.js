import React from 'react'
import OutboundLink from '../OutboundLink/OutboundLink'

const Derek = ({ children }) => (
  <OutboundLink eventLabel="derek-sivers" to="https://sivers.org/nowff">
    {children}
  </OutboundLink>
)

export default {
  en: {
    now: <>
      The now page is <Derek>Derek Siver's idea</Derek> to respond the question <em>"what have you been up to lately?"</em>.
      This is archive of all my past updates.
    </>,
    diving: <>
      Diving is one of my favourite activities, ever since I started in January 2018.
    </>,
    TCM: <>
      Tradicional Chinese medicine helped to improve my health.
    </>,
    God: <>
      My idea of God is more modern, more in the notion of <em>Light</em>, <em>Universe</em>, not as an wise old man sitting somewhere in the clouds.
    </>,
    healing: <>
      During my spiritual awakening, I found out (to my great surprise) that I can do healings with hands or remotely.
      While I like doing so, I'm not an expert on the subject and I'm still unclear for instance about when energy healing
      works and when doesn't.
    </>
  },

  es: {
    ahora: <>
      The now page is <Derek>Derek Siver's idea</Derek> to respond the question <em>"what have you been up to lately?"</em>.
      This is archive of all my past updates.
    </>
  }
}
