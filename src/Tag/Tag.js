/* TODO: tests. */
import React, { Fragment }  from 'react'
import Moment from 'react-moment'
import FetchedData, { useFetchedData } from '../FetchedData/FetchedData'
import postStyles from '../Post/Post.module.css'

/* Update timestamp every 30 seconds. */
const PostPreview = ({ title, slug, date }) => (
  <li>
    <a href={`/posts/${slug}`}>{title}</a>{' '}
    <Moment date={new Date(date)} fromNow interval={30000} className={postStyles.date} />
  </li>
)

// There are always some posts in the loaded state, otherwise the JSON tag file would never get compiled.
const PostPreviewList = ({ posts = [] }) => (
  <ul>
    {posts.map((post) => <PostPreview key={post.slug} {...post} />)}
  </ul>
)

const TagList = ({ name, posts }) => (
  <Fragment>
    <h1>{name}</h1>
    <PostPreviewList posts={posts} />
  </Fragment>
)

export default function Tag ({ match }) {
  const slug = match.params.slug
  const [isLoading, data, error] = useFetchedData(
    `https://raw.githubusercontent.com/botanicus/data.blog/master/output/tags/${slug}.json`, {}
  )

  return (
    <FetchedData isLoading={isLoading} error={error}>
      <TagList {...data} />
    </FetchedData>
  )
}
