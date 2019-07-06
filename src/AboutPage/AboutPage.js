import React, { Fragment } from 'react'
import { SelfLinkingEmail } from '../Email/Email'
import HashTag from '../HashTag/HashTag'
import YearsOfExperience from '../YearsOfExperience/YearsOfExperience'
import Highlight from '../Highlight/Highlight'
import Abbr from '../Abbr/Abbr'
import { rate } from '../config'
import { nowPagePath } from '../routes'
import { Link } from 'react-router-dom'

import styles from './AboutPage.module.css'

const today = new Date()
const january = new Date(today.getFullYear(), 0, 1)
const getTimezone = () => (
  today.getTimezoneOffset() === january.getTimezoneOffset() ? 'Central Daylight Time (CDT UTC −5:00)' : 'Central Standard Time (CST UTC -6:00)'
)

export default () => (
  <Fragment>
    <div className={styles.fixBorderRadius}>
      <h1 className={styles.mainTitle}>Hi! My name is James.</h1>
      <p>
        Thank you for visiting my humble blog.
        I'm an independent web developer with main focus on <HashTag>Ruby</HashTag> (with or without <HashTag>Rails</HashTag>),{' '}
        <HashTag>JavaScript</HashTag> (these days mainly <HashTag>React.js</HashTag>) and <HashTag>Docker</HashTag>.
        This is what I've been doing for the past <YearsOfExperience /> years and what I genuinely enjoy doing.
      </p>
    </div>

    <Highlight>
      I'm happy to help you with your project. I charge ${rate} per hour. Just shoot me an email on <SelfLinkingEmail /> and let me know what are you working on!
    </Highlight>

    <div className={styles.fixBorderRadius}>
      <h2>Why should you hire me?</h2>
      {/*
        Commercial experience
          - VMWare
          - TopTal
          - agencies
          - Healthcare UK, US, HIPAA
        Thinking
          - visionary (pupu ...)
      */}
      <h3 className={styles.reason}>I'm an active OSS author and contributor</h3>
      <p>
        Some things can be faked, <strong>long-term interest</strong> cannot. During my <YearsOfExperience /> years in the industry I've written <strong>120 <Abbr title="open-source software">OSS</Abbr> projects</strong>. There are right there in <a href="https://github.com/botanicus">my GitHub account</a>, you can check them out. I do these projects in my spare time, just because I genuinely enjoy programming.
      </p>

      <p>
        <strong>I contributed to well-know <Abbr title="open-source software">OSS</Abbr></strong> such as <Abbr title="I will post link shortly">RubyGems</Abbr> and <Abbr title="I will post link shortly">rSpec</Abbr>. Having one's own projects shows interest, having commits accepted in top-level projects shows know-how, plain and simple.
      </p>

      <p>
        I also spoke on a number of local events and <Abbr title="In Prague, Dublin, London and Poznan; will post links shortly.">smaller conferences</Abbr>.
      </p>

      <h3 className={styles.reason}>I have a wide range of professional experience</h3>
      <p>
        In my <YearsOfExperience /> years of experience I worked for some big companies, quite a few medium-sized ones, but I mostly work for small start-ups and agencies.
      </p>

      <p>
        One of my favorites was <strong>VMware</strong>. I was hired to rewrite the AMQP gem by the <strong>RabbitMQ team</strong>.
        I did a fair bit of product evangelization in the Ruby community at that time, giving talks, writing documentation and articles.
      </p>

      <p>
        I worked for <strong>TopTal</strong> for <Abbr title="From 2014 until 2019.">5 years</Abbr>. I liked TopTal a lot at the beginning, but eventually their values changed and I decided to leave.
      </p>

      <h3 className={styles.reason}>I have the skills needed to listen, understand and deliver</h3>
      <p>
        I started working in IT, because I love to create stuff and I love technology.
        And I naively thought that that's what the job is all about.
        As the years went by, I realized that knowing technology to a decent degree is only the lowest common denominator.
        What sets professional developers apart are two things: specialized technical kills and the so-called <em>soft</em> skills.
      </p>

      <p>
        Over the time I got more and more interested in the human aspect of this work. Advising the client well, rather than just going with what the spec says. Trying to understand reasoning for things. Listening. Communicating <Abbr title="Which is not the same as being a pushover. It's about the form, not the content.">gently</Abbr>. Discovering what the business is about, who the customers are and why are they using the product.
      </p>

      <p>
        Doing these things matter. That's where the real contribution is. Many people can code, but not everyone is a <em>good consultant</em>.
      </p>
    </div>

    <Highlight>
      <h2>What am I up to now?</h2>
      <p>
        If you are curious about what I'm working on now, don't hesitate to <Link to={nowPagePath}>check my latest status update</Link>, updated monthly.
      </p>
    </Highlight>

    <div className={styles.fixBorderRadius}>
      <h2>How do I work?</h2>
      <p>
        Just as about any remotely working independent developer, my main work tools are Slack, e-mail and an <Abbr title="Mainly Jira, sometimes GitHub or GitLab issues, Pivotal Tracker, Trello and whatnot.">issue tracker</Abbr>.
      </p>

      <p>
        While I'm happy to attend meetings of any sort where my expertise is required, I don't do daily stand-ups{' '}
        <Abbr title="I send progress updates daily of course.">over a call</Abbr>.
        I don't enjoy them, don't consider them productive and I don't like too many fixed points in my schedule.
        I'll get the job done on time, but I want to choose my hours.
      </p>

      <p>
        I want to note that this isn't rooted only in my personal preference, it's also how I'm most productive in the long run.
        It's a setup many creative people have found working for them and there is a good reason for it:
        the brain can either get on with the
      </p>

      <h2>In a nutshell</h2>
      <dl className={styles.list}>
        <dt>I do</dt>
        <dd>Ruby, Ruby on Rails, JavaScript, React.js and Docker</dd>

        <br />{/* Fix in CSS */}
        <dt>My timezone</dt>
        <dd>{getTimezone()}</dd>

        <br />{/* Fix in CSS */}
        <dt>My hourly rate</dt>
        <dd>${rate}</dd>

        <br />{/* Fix in CSS */}
        <dt>Contact</dt>
        <dd><SelfLinkingEmail /></dd>
      </dl>
    </div>
  </Fragment>
)
