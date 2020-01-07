/* TODO: tests. */
import React, { useEffect } from 'react'
import PostPreview from '../PostPreview/PostPreview'
import FetchedData, { useFetchedData } from '../FetchedData/FetchedData'
import styles from './HomePage.module.css'
import { assert } from '../utils'

const PostPreviewList = ({ posts }) => (
  posts.map((post) => <PostPreview key={post.slug} {...post} />)
)

const NoPostsPlaceholder = () => (
  <div className={assert(styles.empty)}>There are no posts yet.</div>
)

const PostList = ({ posts }) => (
  posts.length ? <PostPreviewList posts={posts} /> : <NoPostsPlaceholder />
)

export default function Home () {
  const [isLoading, posts, error] = useFetchedData(
    'https://raw.githubusercontent.com/botanicus/data.blog/master/output/posts.json', []
  )

  useEffect(() => {
    document.title = "Jakub's blog"
  })

  return (
    <FetchedData isLoading={isLoading} error={error}>
      <PostList posts={posts} />
    </FetchedData>
  )
}
