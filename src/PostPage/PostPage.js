/* TODO: tests. */
import React from 'react'
import { Link } from 'react-router-dom'
import Discussion from '../Discussion/Discussion'
import PostStatusLine from '../PostStatusLine/PostStatusLine'
import FetchedData, { useFetchedData } from '../FetchedData/FetchedData'
import showdown from 'showdown'
import Gravatar from '../Gravatar/Gravatar'

import styles from './PostPage.module.css'

function markdownToHTML (markdownText) {
  const converter = new showdown.Converter()
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
        <PostStatusLine date={post.date} tags={post.tags} />
        {/* We wrap it in div, as the excerpt is already wrapped in <p> due to the markdown conversion. */}
        <div className={styles.excerpt} dangerouslySetInnerHTML={{__html: markdownToHTML(post.excerpt)}} />
        <div className={styles.post} dangerouslySetInnerHTML={{ __html: markdownToHTML(post.body)}} />

        <footer>
          <Gravatar />
          Did you like the post? The author is looking for Ruby, Ruby on Rails, JavaScript and React.js work.
          You can find out more <Link to="/about">about the author</Link>.
        </footer>

        <Discussion url={post.url} identifier={post.slug} title={post.title} />
      </article>
    </FetchedData>
  )
}
