import React, { Fragment } from 'react'
import { SelfLinkingEmail } from './Email'
import HashTag from './HashTag'
import YearsOfExperience from './YearsOfExperience'
import Highlight from './Highlight'
import config from './config'

export default function About () {
  return <Fragment>
    <h2>Hi! My name is James.</h2>
    <p>
      Thank you for visiting my humble blog.
      I'm a web developer with main focus on <HashTag>Ruby</HashTag> (with or without <HashTag>Rails</HashTag>),{' '}
      <HashTag>JavaScript</HashTag> (these days mainly <HashTag>React.js</HashTag>) and <HashTag>Docker</HashTag>.
      This is what I've been doing for the past <YearsOfExperience /> years and what I genuinely enjoy doing.
    </p>

    <Highlight>
      I'm happy to help you with your project. I charge ${config.rate} per hour. Just shoot me an email on <SelfLinkingEmail /> and let me know what are you working on!
    </Highlight>

    <h3>Why should you hire me?</h3>
    {/* OSS */}
    <p>
      In my <YearsOfExperience /> years of experience I worked for some big companies, quite a few medium-sized ones, but mostly I work for small start-ups.
    </p>

    <p>
      VMware experience
    </p>

    <p>
      During my time in VMware I did quite a lot of product evangelization and also abit of public speaking.
      As much as I enjoyed it at the time, I realized I'm not that good in these (with the exception of technical writing which I still really enjoy), so I stopped doing them.
    </p>

    Healthcare UK, US

    <h3>How do I work?</h3>
    <p>
      Just as about any remotely working freelancer, my main work tools are Slack, e-mail and an <abbr title="Mainly Jira, sometimes GitHub or GitLab issues, Pivotal Tracker, Trello and whatnot.">issue tracker</abbr>.
    </p>

    <p>
      While I'm happy to attend meetings of any sort where my expertise is required, I don't do daily stand-ups.
      I don't enjoy them and I don't like too many fixed points in my schedule. I'll get the job done on time,
      but I want to choose my hours.
    </p>

    <h3>In a nutshell</h3>
    <ul>
      <li>My timezone: Mexico City</li>
    </ul>
  </Fragment>
}
