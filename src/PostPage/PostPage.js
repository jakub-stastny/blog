/* TODO: tests. */
import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import Discussion from '../Discussion/Discussion'
import NewsletterSignUpForm from '../NewsletterSignUpForm/NewsletterSignUpForm'
import HashTag from '../HashTag/HashTag'
import PostStatusLine from '../PostStatusLine/PostStatusLine'
import FetchedData, { useFetchedData } from '../FetchedData/FetchedData'
import { FetchError } from '../Errors/Errors'
import showdown from 'showdown'
import Gravatar from '../Gravatar/Gravatar'
import { Tooltip } from 'react-tippy'

import styles from './PostPage.module.css'
import 'react-tippy/dist/tippy.css'

import { registerFont, FontAwesomeIcon } from '../FontAwesome/FontAwesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

registerFont(faArrowRight)

const TouchFriendlyAbbr = ({ text, tooltipText }) => (
  <Tooltip title={tooltipText} position="bottom" trigger="click">{text} <b style={{color: 'green'}}>(?)</b></Tooltip>
)

function markdownToHTML (markdownText) {
  const converter = new showdown.Converter({emoji: true})
  return converter.makeHtml(markdownText)
}

export default function Post ({ match }) {
  const slug = match.params.slug
  const [isLoading, post, error] = useFetchedData(
    `https://raw.githubusercontent.com/botanicus/data.blog/master/output/${slug}/${slug}.json`, {}
  )

  const bodyRef = useRef(null)

  useEffect(() => {
    const bodyElement = bodyRef.current
    if (!bodyElement) return
    Array.from(bodyElement.querySelectorAll('abbr[title]')).forEach((abbr) => {
      ReactDOM.render(<TouchFriendlyAbbr text={abbr.innerText} tooltipText={abbr.title} />, abbr)
    })

    Array.from(bodyElement.querySelectorAll('i.hashtag')).forEach((i) => {
      ReactDOM.render(<HashTag>{i.innerText}</HashTag>, i)
    })
  })

  const errorComponent = <FetchError error={error} />

  return (
    <FetchedData isLoading={isLoading} error={error} errorReporter={errorComponent}>
      <article>
        <h1 className={styles.mainTitle}>{post.title}</h1>
        <div className={styles.statusLine}>
          <PostStatusLine date={post.date} tags={post.tags} />
        </div>

        {/* We wrap it in div, as the excerpt is already wrapped in <p> due to the markdown conversion. */}
        <div className={styles.excerpt} dangerouslySetInnerHTML={{__html: markdownToHTML(post.excerpt)}} />
        <div className={styles.post} dangerouslySetInnerHTML={{ __html: markdownToHTML(post.body)}} ref={bodyRef} />

        <footer className={styles.footer}>
          <div className={styles.newsletter}>
            Did you like the post? Sign up for my newsletter and I'll send you a <em>monthly</em> email with the most popular posts of the month.
            <NewsletterSignUpForm />
          </div>

          <div className={styles.about}>
            <Gravatar className={styles.gravatar} />
            Hi, my name is James. I'm a <HashTag>Ruby</HashTag>, <HashTag>Ruby on Rails</HashTag>, <HashTag>JavaScript</HashTag> and <HashTag>React.js</HashTag> developer available for freelance work.<br /><br />
            <FontAwesomeIcon icon={faArrowRight} color="darkgreen" />{' '}
            You can find out more about me on the <Link to="/about">about page</Link>.
          </div>
        </footer>

        <Discussion url={post.url} identifier={post.slug} title={post.title} />
      </article>
    </FetchedData>
  )
}
