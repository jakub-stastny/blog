/* TODO: tests. */
import React, { useEffect, useRef, memo } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import Email from '../Email/Email'
import NewsletterSignUpForm from '../NewsletterSignUpForm/NewsletterSignUpForm'
import HashTag from '../HashTag/HashTag'
import PostStatusLine from '../PostStatusLine/PostStatusLine'
import FetchedData, { useFetchedData } from '../FetchedData/FetchedData'
import { FetchError } from '../Errors/Errors'
import Gravatar from '../Gravatar/Gravatar'
import ConversationPrompt from '../ConversationPrompt/ConversationPrompt'
import { Tooltip } from 'react-tippy'
import { aboutPagePath } from '../routes'
import { markdownToHTML } from '../utils'

import styles from './PostPage.module.css'
import 'react-tippy/dist/tippy.css'

import { registerFont, FontAwesomeIcon } from '../FontAwesome/FontAwesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

registerFont(faArrowRight)

const TouchFriendlyAbbr = ({ text, tooltipText }) => (
  <Tooltip title={tooltipText} position="bottom" trigger="click">{text} <b style={{color: 'green'}}>(?)</b></Tooltip>
)

export default memo(function Post ({ match }) {
  const slug = match.params.slug
  const [isLoading, post, error] = useFetchedData(
    `https://raw.githubusercontent.com/botanicus/data.blog/master/output/${slug}/post.json`, {}
  )

  const bodyRef = useRef(null)

  useEffect(() => {
    const bodyElement = bodyRef.current
    if (!bodyElement) return

    console.log('~ Processing post body.')

    Array.from(bodyElement.querySelectorAll('abbr[title]')).forEach((abbr) => {
      ReactDOM.render(<TouchFriendlyAbbr text={abbr.innerText} tooltipText={abbr.title} />, abbr)
    })

    Array.from(bodyElement.querySelectorAll('i.hashtag')).forEach((i) => {
      ReactDOM.render(<HashTag>{i.innerText}</HashTag>, i)
    })

    Array.from(bodyElement.querySelectorAll(`img[src^="${slug}/"]`)).forEach((img) => {
      // img.src will print the whole URL, which is incorrect at this case, as it's assuming the frontend to be the root.
      console.log(img, img.getAttribute('src'))
      const path = img.getAttribute('src')
      img.src = `https://raw.githubusercontent.com/botanicus/data.blog/master/output/${path}`
    })
  })

  useEffect(() => {
    document.title = post.title ? post.title : "Loading ..."
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
            <p>
              Did you like the post? Sign up for my newsletter and I'll send you a <em>monthly</em> email with the most popular posts of the month.
            </p>

            <NewsletterSignUpForm />
          </div>

          <div className={styles.about}>
            <Gravatar className={styles.gravatar} />
            <ConversationPrompt tagNames={post.tags && post.tags.map(tag => tag.name)} />

            <p>
              <FontAwesomeIcon icon={faArrowRight} color="darkgreen" />{' '}
              You can find out more about me on the <Link to={aboutPagePath}>about page</Link>.
            </p>
          </div>

          <p className={styles.discussion}>
            At the moment I don't support discussions. If you have any comments, please contact me directly on <Email />.
          </p>

          <p className={styles.license}>
            This post has been <a href="/posts/releasing-copyright">uncopyrighted</a>. You can do anything you want with it.
          </p>

          <p className={styles.license}>
            It is also OSS and if you see any typos or information that you believe incorrect, you can just{' '}
            <a href="/posts/how-to-submit-a-pull-request-to-my-posts">submit a pull request</a>.
          </p>
        </footer>
      </article>
    </FetchedData>
  )
})
