import React, { useContext, useEffect } from 'react'
import StateContext from '../state'
import styles from '../HomePage/HomePage.module.css'
import { assert } from '../utils'
import Link from '../Link/Link'
import Spinner from '../Spinner/Spinner'
import { getTagPagePath } from '../routes'

const TagPreview = ({ slug, name }) => (
  <ul>
    <li><Link to={getTagPagePath(slug)}>{name}</Link></li>
  </ul>
)

const TagPreviewList = ({ tags }) => (
  tags.sort((a, b) => a.slug.localeCompare(b.slug)).map((tag) => <TagPreview key={tag.slug} {...tag} />)
)

const NoTagsPlaceholder = () => (
  <div className={assert(styles.empty)}>There are no tags yet.</div>
)

const TagList = ({ tags }) => (
  tags.length ? <TagPreviewList tags={tags} /> : <NoTagsPlaceholder />
)

export default function TagsPage () {
  const state = useContext(StateContext)

  useEffect(() => { state.tagsFetched || state.helpers.fetchTags() })

  return (
    state.tagsFetched ? <TagList tags={state.tags} /> : <Spinner title="the tags" />
  )
}
