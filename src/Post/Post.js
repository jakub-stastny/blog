/* TODO: tests. */
import React, { useState, useEffect } from 'react'
import Moment from 'react-moment'
import { FetchError } from '../Errors/Errors'

import { Link } from 'react-router-dom'
import TagList from '../TagList/TagList'
import Discussion from '../Discussion/Discussion'

import styles from './Post.module.css'

export default function Post () {
  const [isLoading, setIsLoading] = useState(true)
  const [post, setPost] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    const slug = this.props.match.params.slug
    fetch(`https://raw.githubusercontent.com/botanicus/data.blog/content/content/posts/${slug}.json`)
    // We get the API response and receive data in JSON format...
    .then(response => response.json())
    // ...then we update the users state
    .then(data => {
      setIsLoading(false)
      setPost(data)
    })
    // Catch any errors we hit and update the app
    .catch(error => {
      setIsLoading(false)
      setError(error)
    })
  })

  if (isLoading) return null
  if (error) return <FetchError error={error} />

  return (
    <article>
      <h1>{post.title}</h1>
      {/* Update every 30 seconds. */}
      <Moment date={new Date(post.published_at)} fromNow interval={30000} className={styles.date} />
      <TagList tags={post.tags} />
      <p className={styles.excerpt} dangerouslySetInnerHTML={{__html: post.excerpt}} />
      <div dangerouslySetInnerHTML={{ __html: post.body}} />

      <footer>
        {/* Small pic of me. */}
        <Link to="/about">About the author</Link>.
      </footer>

      <Discussion url={post.url} identifier={post.slug} title={post.title} />
    </article>
  )
}
