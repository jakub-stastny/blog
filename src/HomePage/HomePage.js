/* TODO: tests. */
import React, { useContext, memo } from 'react'
import { useTitle } from 'hookrouter'
import PostPreview from '../PostPreview/PostPreview'
import StateContext from '../state'
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

export default memo(function HomePage () {
  const state = useContext(StateContext)

  useTitle("Jakub's blog")

  // TODO: Suspense
  return state.postsFetched ? <PostList posts={state.posts} /> : null
})
