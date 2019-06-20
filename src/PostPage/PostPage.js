/* TODO: tests. */
import React from 'react'
import { Link } from 'react-router-dom'
import Discussion from '../Discussion/Discussion'
import PostStatusLine from '../PostStatusLine/PostStatusLine'
import FetchedData, { useFetchedData } from '../FetchedData/FetchedData'
import showdown from 'showdown'
import Gravatar from '../Gravatar/Gravatar'

import styles from './PostPage.module.css'

import { registerFont, FontAwesomeIcon } from '../FontAwesome/FontAwesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

registerFont(faArrowRight)

function markdownToHTML (markdownText) {
  const converter = new showdown.Converter({emoji: true})
  return converter.makeHtml(markdownText)
}

export default function Post ({ match }) {
  const slug = match.params.slug
  const [isLoading, post, error] = useFetchedData(
    `https://raw.githubusercontent.com/botanicus/data.blog/master/output/${slug}/${slug}.json`, {}
  )

  return (
    <FetchedData isLoading={isLoading} error={error}>
      <article>
        <h1 className={styles.mainTitle}>{post.title}</h1>
        <div className={styles.statusLine}>
          <PostStatusLine date={post.date} tags={post.tags} />
        </div>

        {/* We wrap it in div, as the excerpt is already wrapped in <p> due to the markdown conversion. */}
        <div className={styles.excerpt} dangerouslySetInnerHTML={{__html: markdownToHTML(post.excerpt)}} />
        <div className={styles.post} dangerouslySetInnerHTML={{ __html: markdownToHTML(post.body)}} />

        <footer className={styles.footer}>
          {/*<Gravatar />*/}
          Did you like the post? The author is looking for Ruby, Ruby on Rails, JavaScript and React.js freelance work.<br /><br />
          <FontAwesomeIcon icon={faArrowRight} color="darkgreen" />{' '}
          You can find out more about the author on the <Link to="/about">about page</Link>.
        </footer>

        <Discussion url={post.url} identifier={post.slug} title={post.title} />
      </article>
    </FetchedData>
  )
}
