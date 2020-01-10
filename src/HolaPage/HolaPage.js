import React, { memo } from 'react'
import { A } from 'hookrouter'
import Email from '../Email/Email'
import { registerFont, FontAwesomeIcon } from '../FontAwesome/FontAwesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

registerFont(faArrowRight)

export default memo(function HolaPage () {
  return (
    <>
      <h1>Hey there!</h1>
      <h2 style={{fontStyle: 'italic'}}>I see you came from the link on my business card. Welcome!</h2>
      <p>
        Since we met in person, I'm happy to give you my full contact details. But before I do that, I'd like to ask you a favour:
      </p>

      <div style={{background: 'maroon', color: 'white', borderRadius: 15, padding: 10}}>
        <p>
          Please do not share this page with anyone and don't link to it from any web site.
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

      <ul>
        <li>Telegram <a href="https://t.me/jakubstastny">@jakubstastny</a></li>
        <li>Email <Email personal /></li>
        <li>iMessage <Email personal /></li>
      </ul>

      <p style={{color: 'dimgrey', fontStyle: 'italic'}}>
        As I probably told you, I don't have WhatsApp, FB or even phone,
        so these are the only means of contacting me.
      </p>

      <div style={{marginTop: 30, fontSize: 18}}>
        <FontAwesomeIcon icon={faArrowRight} color="darkgreen" />{' '}
        <A href="/">Check out my blog</A>
      </div>
    </>
  )
})
