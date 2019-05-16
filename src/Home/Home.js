/* TODO: tests. */
import React from 'react'
import PostPreview from '../PostPreview/PostPreview'
import FetchedData, { useFetchedData } from '../FetchedData/FetchedData'
import styles from './Home.module.css'
import { assert } from '../utils'

function PostList ({ posts }) {
  if (posts.length) {
    return posts.map((post) => <PostPreview key={post.slug} {...post} />)
  } else {
    return <div className={assert(styles.empty)}>There are no posts yet.</div>
  }
}

export default function Home () {
  const [isLoading, posts, error] = useFetchedData(
    'https://raw.githubusercontent.com/botanicus/data.blog/content/content/posts.json', []
  )

  return <FetchedData isLoading={isLoading} error={error}>
    <PostList posts={posts} />
  </FetchedData>
}
