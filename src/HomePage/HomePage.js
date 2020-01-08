/* TODO: tests. */
import React, { useEffect, useContext, memo } from 'react'
import PostPreview from '../PostPreview/PostPreview'
// import FetchedData, { useFetchedData } from '../FetchedData/FetchedData'
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

  useEffect(() => { document.title = "Jakub's blog" }, [])

  // TODO: Suspense
  return state.postsFetched ? <PostList posts={state.posts} /> : null
  // return (
  //   <FetchedData isLoading={isLoading} error={error}>
  //     <PostList posts={state.posts} />
  //   </FetchedData>
  // )
})
