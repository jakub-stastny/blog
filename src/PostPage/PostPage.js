import React, { useEffect, useContext, useRef, memo } from 'react'
import ReactDOM from 'react-dom'
import StateContext from '../StateContext'
import LangContext from '../LangContext'
import { useTitle, A, navigate } from 'hookrouter'
import AdBlockDetect from '../AdBlockDetect/AdBlockDetect'
import NewsletterSignUpForm, { NewsletterSignUpLink } from '../NewsletterSignUpForm/NewsletterSignUpForm'
import HashTag from '../HashTag/HashTag'
import PostStatusLine from '../PostStatusLine/PostStatusLine'
// import { FetchError } from '../Errors/Errors'
import Gravatar from '../Gravatar/Gravatar'
import ConversationPrompt from '../ConversationPrompt/ConversationPrompt'
import Spinner from '../Spinner/Spinner'
import { Tooltip } from 'react-tippy'
import { markdownToHTML } from '../utils'
import { assert } from '../utils'

import styles from './PostPage.module.css'
import 'react-tippy/dist/tippy.css'

const TouchFriendlyAbbr = ({ text, tooltipText }) => (
  <Tooltip title={tooltipText} position="bottom" trigger="click">{text} <b style={{color: 'green'}}>(?)</b></Tooltip>
)

export default memo(function Post ({ slug }) {
  const lang = useContext(LangContext).lang
  const state = useContext(StateContext)
  const post = state.helpers.getPost(slug)

  const bodyRef = useRef(null)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { (post && post.body) || state.helpers.fetchPost(slug) }, [])

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

    Array.from(bodyElement.querySelectorAll('a[href^="/"]')).forEach((a) => {
      a.addEventListener('click', (event) => {
        console.log(`~ Navigating to ${a.href}`)
        navigate(a.href)
        event.preventDefault()
      })
    })

    Array.from(bodyElement.querySelectorAll(`img[src^="${slug}/"]`)).forEach((img) => {
      // img.src will print the whole URL, which is incorrect at this case, as it's assuming the frontend to be the root.
      console.log(img, img.getAttribute('src'))
      const path = img.getAttribute('src')
      img.src = `https://raw.githubusercontent.com/botanicus/data.blog/master/output/${path}`
    })
  }, [post, slug])

  useTitle(post ? post.title : "Loading the post ...")

  // const errorComponent = <FetchError error={error} />

  if (!post) return <Spinner title="the post" />

  return (
    <article>
      <h1 className={assert(styles.mainTitle)}>{post.title}</h1>
      <div className={assert(styles.statusLine)}>
        <PostStatusLine date={post.date} tags={post.tags} />
      </div>

      {/* We wrap it in div, as the excerpt is already wrapped in <p> due to the markdown conversion. */}
      <div className={assert(styles.excerpt)} dangerouslySetInnerHTML={{__html: markdownToHTML(post.excerpt)}} />

      {post.body ?
        <div className={assert(styles.post)} dangerouslySetInnerHTML={{ __html: markdownToHTML(post.body)}} ref={bodyRef} />
          :
        <Spinner title="the post" />
      }

      <footer className={assert(styles.footer)}>
        <div className={assert(styles.about)}>
          <Gravatar className={assert(styles.gravatar)} />
          <ConversationPrompt tagNames={post.tags && post.tags.map(tag => tag.name)} />
        </div>

        <div className={assert(styles.newsletter)}>
          <AdBlockDetect>
            <p>
              Did you like the post? <NewsletterSignUpLink>Sign up</NewsletterSignUpLink> for my newsletter and I'll send you a <em>quarterly</em> email with the most popular posts.
            </p>
          </AdBlockDetect>

          <AdBlockDetect value={false}>
            <p>
              Did you like the post? Sign up for my newsletter and I'll send you a <em>quarterly</em> email with the most popular posts.
            </p>

            <NewsletterSignUpForm />
          </AdBlockDetect>
        </div>

        <p className={assert(styles.license)}>
          This post has been <A href="/posts/releasing-copyright">uncopyrighted</A>. You can do anything you want with it.
        </p>

        <p className={assert(styles.license)}>
          It is also OSS and if you see any typos or information that you believe incorrect, you can just{' '}
          <A href="/posts/how-to-submit-a-pull-request-to-my-posts">submit a pull request</A>.
        </p>
      </footer>
    </article>
  )
})
