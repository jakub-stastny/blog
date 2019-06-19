/* TODO: tests. */
import React from 'react'
import { Link } from 'react-router-dom'
import TagList from '../TagList/TagList'
import Discussion from '../Discussion/Discussion'
import PublishedDate from '../PublishedDate/PublishedDate'
import FetchedData, { useFetchedData } from '../FetchedData/FetchedData'
import { assert } from '../utils'
import showdown from 'showdown'

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
        <h1>{post.title}</h1>
        <PublishedDate date={post.date} />
        <TagList tags={post.tags} />
        <p className={styles.excerpt} dangerouslySetInnerHTML={{__html: markdownToHTML(post.excerpt)}} />
        <div dangerouslySetInnerHTML={{ __html: markdownToHTML(post.body)}} />

        <footer>
          {/* TODO: gravatar. */}
          <Link to="/about">About the author</Link>.
        </footer>

        <Discussion url={post.url} identifier={post.slug} title={post.title} />
      </article>
    </FetchedData>
  )
}
