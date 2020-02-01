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
    <Highlight title="What I'm up to now?" style={{marginTop: 20, background: 'whitesmoke'}}>
      <p>
        If you are curious about what I've been up to lately, here's my {lastStatusUpdateLink}.
      </p>
    </Highlight>

    <h1 className={assert(styles.mainTitle)}>Hi! My name is Jakub.</h1>
    <div className={assert(styles.gravatarBox)}>
      <Gravatar className={assert(styles.gravatar)} />

      <p>
        I'm from a small town in the middle of nowhere in Czech Republic <CZ /> now living in sunny Mexico ☀️<MX />.
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
        After my <A href={'X'}>spiritual awakening</A> I decided to concentrate my efforts on helping people
        and providing them with spiritual guidance, after I found out (to my great surprise),
        that I have many spiritual gifts such as being able to link with someone, and then
        consequently feel if there's something going on with them, visions, insights into
        people's souls and generally <em>"knowing things"</em>.
      </p>

      <p>
        Would you like to know more, here is <A href={myStoryPath}>my life story</A> packed for ready consumption,
        napkins included.
      </p>

      <p>
        Some of the things I enjoy: <HashTags hashtags={
          ['dancing', 'blues', 'jazz', 'diving', 'therapy', 'nature', 'spirituality']
        } />
      </p>

      <Highlight title="My contact">
        <p>
          I'm friendly. Well, mostly. OK, sometimes. Anyway ... I don't bite. Well, usually.
          So if you want to get in touch, please don't hesitate to drop me an email to <Email />.
        </p>
      </Highlight>
    </div>
  </>
)
