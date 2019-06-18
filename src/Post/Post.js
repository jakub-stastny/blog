/* TODO: tests. */
import React from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import TagList from '../TagList/TagList'
import Discussion from '../Discussion/Discussion'
import FetchedData, { useFetchedData } from '../FetchedData/FetchedData'
import { assert } from '../utils'

import styles from './Post.module.css'

export default function Post ({ match }) {
  const slug = match.params.slug
  const [isLoading, post, error] = useFetchedData(
    `https://raw.githubusercontent.com/botanicus/data.blog/master/output/${slug}/${slug}.json`, {}
  )

  return <FetchedData isLoading={isLoading} error={error}>
    <article>
      <h1>{post.title}</h1>
      {/* Update every 30 seconds. */}
      <Moment date={new Date(post.date)} fromNow interval={30000} className={assert(styles.date)} />
      <TagList tags={post.tags} />
      <p className={styles.excerpt} dangerouslySetInnerHTML={{__html: post.excerpt}} />
      <div dangerouslySetInnerHTML={{ __html: post.body}} />

      <footer>
        {/* TODO: gravatar. */}
        <Link to="/about">About the author</Link>.
      </footer>

      <Discussion url={post.url} identifier={post.slug} title={post.title} />
    </article>
  </FetchedData>
}
