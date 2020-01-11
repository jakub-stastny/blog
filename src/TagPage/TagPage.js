import React, { useEffect, useContext }  from 'react'
import { useTitle, A } from 'hookrouter'
import StateContext from '../StateContext'
import PublishedDate from '../PublishedDate/PublishedDate'
import Spinner from '../Spinner/Spinner'
import { getPostPagePath } from '../routes'
import { assert } from '../utils'
import styles from './TagPage.module.css'

const PostPreview = ({ title, slug, date }) => (
  <li>
    <A href={getPostPagePath(slug)}>{title}</A>{' '}
    <span className={assert(styles.date)}>
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
  <>
    <h1>Posts tagged <span className={assert(styles.emphasis)}>{name}</span></h1>
    <PostPreviewList posts={posts} />
  </>
)

export default function Tag ({ slug }) {
  const state = useContext(StateContext)
  const tag = state.helpers.getTag(slug)

  useTitle(tag ? `Tag ${tag.name}` : "Loading ...")

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { state.helpers.fetchTag(slug) }, [])

  return (
    tag ? <TagList {...tag} /> : <Spinner title="the tag data" />
  )
}
