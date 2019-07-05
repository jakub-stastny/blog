import React, { Fragment }  from 'react'
import FetchedData, { useFetchedData } from '../FetchedData/FetchedData'
import PublishedDate from '../PublishedDate/PublishedDate'
import { getPostPagePath } from '../routes'
import styles from './TagPage.module.css'

const PostPreview = ({ title, slug, date }) => (
  <li>
    <a href={getPostPagePath(slug)}>{title}</a>{' '}
    <span className={styles.date}>
      <PublishedDate date={date} />
    </span>
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
    <h1>Posts tagged <span className={styles.emphasis}>{name}</span></h1>
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
